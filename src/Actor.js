import { mat4, vec3, quat } from 'gl-matrix';

class Pose {
  constructor(init) {
    this.orientation = init.orientation || quat.create();
    this.position = init.position || vec3.create();
    this.scale = init.scale || vec3.fromValues(1.0, 1.0, 1.0);
    this.matrix = mat4.create();
  }
  updateMatrix() {
    mat4.fromRotationTranslationScale(this.matrix,
                                      this.orientation,
                                      this.position,
                                      this.scale);
  }
  lerp(p1, p2, t) {
    quat.slerp(this.orientation, p1.orientation, p2.orientation, t);
    vec3.lerp(this.position, p1.position, p2.position, t);
    vec3.lerp(this.scale, p1.scale, p2.scale, t);
  }
  copyTo(dest) {
    quat.copy(dest.orientation, this.orientation);
    vec3.copy(dest.position, this.position);
    vec3.copy(dest.scale, this.scale);
  }
}

class Behavior {
  constructor() {
    this.complete = false;
  }

  // eslint-disable-next-line class-methods-use-this
  enter(/* actor */) {

  }
  // eslint-disable-next-line class-methods-use-this
  exit(/* actor */) {

  }
  // eslint-disable-next-line class-methods-use-this
  preUpdate(/* actor, time */) {

  }
  // eslint-disable-next-line class-methods-use-this
  postUpdate(/* actor, time */) {

  }
}

const ActorFlags = {
  NONE: 0,
  PRE_UPDATE: 1,
  POST_UPDATE: 2,
  DRAW: 4,
  CAMERA: 8,
  LIGHT: 16,
};

class Actor {
  constructor(init) {
    this.flags = ActorFlags.NONE;
    this.stage = null;
    this.parent = null;
    this.children = null;
    this.pose = new Pose();
    this.modelMatrix = mat4.create();
    this.behaviors = (init && init.behaviors) || null;
    this.props = (init && init.props) || null;
    if (this.behaviors) {
      this.setFlag(ActorFlags.DRAW);
    }
    if (this.props && this.props.length > 0) {
      this.setFlag(ActorFlags.DRAW);
    }
  }
  hasFlag(flag) {
    // eslint-disable-next-line no-bitwise
    return this.flags & flag !== 0;
  }
  enableFlag(flag) {
    // eslint-disable-next-line no-bitwise
    this.flags |= flag;
  }
  disableFlag(flag) {
    // eslint-disable-next-line no-bitwise
    this.flags &= ~flag;
  }
  addChild(child) {
    if (child.parent !== null) { throw new Error('child already parented'); }
    this.children = this.children || [];
    child.stage = this.stage;
    child.parent = this;
    this.children.push(child);
    child.state.actorAdded(child);
  }
  removeChild(child) {
    if (child.parent !== this) { throw new Error('not yo babies momma'); }
    const oldStage = child.stage;
    child.stage = null;
    child.parent = null;
    const index = this.children.indexOf(child);
    if (index >= 0) {
      this.children.splice(index, 1);
    }
    oldStage.actorRemoved(child);
  }
  removeCompleteBehaviors() {
    for (let i = this.behaviors.length; i >= 0; --i) {
      if (this.behaviors[i].isComplete) {
        this.behaviors.splice(i, 1);
      }
    }
  }
  enter() {
    if (this.behaviors) {
      for (let i = 0; i < this.behaviors.length; ++i) {
        this.behaviors[i].enter(this);
      }
      this.removeCompleteBehaviors();
    }
  }
  exit() {
    if (this.behaviors) {
      for (let i = 0; i < this.behaviors.length; ++i) {
        this.behaviors[i].exit(this);
      }
      this.removeCompleteBehaviors();
    }
  }
  traverse(callback) {
    const stack = [this];
    while (stack.length > 0) {
      const next = stack.pop();
      callback(next);
      if (next.children) {
        stack.push(...next.children);
      }
    }
  }
  preUpdate(time) {
    if (this.behaviors) {
      for (let i = 0; i < this.behaviors.length; ++i) {
        this.behaviors[i].preUpdate(this, time);
      }
      this.removeCompleteBehaviors();
    }
  }
  updateMatrix() {
    this.pose.updateMatrix();
    if (this.parent) {
      mat4.multiply(this.modelMatrix, this.parent.modelMatrix, this.pose.matrix);
    } else {
      mat4.copy(this.modelMatrix, this.pose.matrix);
    }
  }
  postUpdate(time) {
    if (this.behaviors) {
      for (let i = 0; i < this.behaviors.length; ++i) {
        this.behaviors[i].postUpdate(this, time);
      }
    }
    this.removeCompleteBehaviors();
  }
  draw(ctx) {
    if (this.props) {
      ctx.modelMatrix = this.modelMatrix;
      for (let i = 0; i < this.props.length; ++i) {
        this.props[i].draw(ctx);
      }
    }
  }
  setPose(pose) {
    pose.copyTo(this.pose);
  }
  moveTo(x, y, z) {
    vec3.set(this.pose.position, x, y, z);
  }
  lookAt(x, y, z) {
    mat4.lookAt(this.pose.matrix,
                this.pose.position,
                vec3.fromValues(x, y, z),
                vec3.fromValues(0, 1, 0));
    mat4.getRotation(this.pose.orientation, this.pose.matrix);
    quat.invert(this.pose.orientation, this.pose.orientation);
  }
}

class Camera extends Actor {
  constructor() {
    super();
    this.setFlag(ActorFlags.CAMERA);
    this.viewMatrix = mat4.create();
    this.projMatrix = mat4.create();
  }
  // eslint-disable-next-line class-methods-use-this
  updateProjection() {
  }
  updateView() {
    mat4.invert(this.viewMatrix, this.modelMatrix);
  }
}

class PerspectiveCamera extends Camera {
  constructor(init) {
    super();
    this.fov = (init && init.fov) || Math.PI / 2.0;
    this.near = (init && init.near) || 1.0;
    this.far = (init && init.far) || 1000.0;
    this.viewportWidth = (init && init.viewportWidth) || 512;
    this.viewportHeight = (init && init.viewportHeight) || 512;
    this.updateProjection();
  }
  updateProjection() {
    mat4.perspective(this.projMatrix,
                     this.fov,
                     this.viewportWidth / this.viewportHeight,
                     this.near,
                     this.far);
  }
}

class OrthoCamera extends Camera {
  constructor(init) {
    super();
    this.left = (init && init.left) || 0;
    this.right = (init && init.right) || 1;
    this.top = (init && init.top) || 0;
    this.bottom = (init && init.bottom) || 1;
    this.near = (init && init.near) || 0.0;
    this.far = (init && init.far) || 1.0;
    this.updateProjection();
  }
  updateProjection() {
    mat4.perspective(this.projMatrix,
                     this.fov,
                     this.viewportWidth / this.viewportHeight,
                     this.near,
                     this.far);
  }
  updateView() {
    mat4.invert(this.viewMatrix, this.modelMatrix);
  }
}

class SpotLight extends PerspectiveCamera {
  constructor(init) {
    super(init);
    this.setFlag(ActorFlags.LIGHT);
  }
}

class DirectionalLight extends OrthoCamera {
  constructor(init) {
    super(init);
    this.setFlag(ActorFlags.LIGHT);
  }
}

export {
  Pose,
  Behavior,
  ActorFlags,
  Actor,
  Camera,
  PerspectiveCamera,
  OrthoCamera,
  SpotLight,
  DirectionalLight,
};

import { mat4, vec3, quat } from 'gl-matrix';
import ActorFlags from './ActorFlags';
import Pose from '../Math/Pose';

const InternalActorFlags = {
  ENTERED: 1,
};

export default class Actor {
  constructor(init) {
    this.flags = 0;
    this.internalFlags = 0;
    this.stage = null;
    this.parent = null;
    this.children = null;
    this.pose = new Pose();
    this.modelMatrix = mat4.create();
    this.behaviors = (init && init.behaviors) || null;
    this.drawable = null;
    if ((init && init.drawable)) {
      this.setDrawable(init.drawable);
    }
    if (this.behaviors && this.behaviors.length > 0) {
      this.enableFlag(ActorFlags.UPDATE);
    }
  }
  hasFlag(flag) {
    // eslint-disable-next-line no-bitwise
    return this.flags & flag !== 0;
  }
  enableFlag(flag) {
    // eslint-disable-next-line no-bitwise
    this.flags |= flag;
    if (this.stage) {
      this.stage.needsRebuild = true;
    }
  }
  disableFlag(flag) {
    // eslint-disable-next-line no-bitwise
    this.flags &= ~flag;
    if (this.stage) {
      this.stage.needsRebuild = true;
    }
  }
  hasInternalFlag(flag) {
    // eslint-disable-next-line no-bitwise
    return this.internalFlags & flag !== 0;
  }
  enableInternalFlag(flag) {
    // eslint-disable-next-line no-bitwise
    this.internalFlags |= flag;
  }
  disableInternalFlag(flag) {
    // eslint-disable-next-line no-bitwise
    this.internalFlags &= ~flag;
  }
  setDrawable(drawable) {
    this.drawable = drawable;
    this.enableFlag(ActorFlags.DRAW);
  }
  addChild(child) {
    if (child.parent !== null) { throw new Error('child already parented'); }
    child.stage = this.stage;
    child.parent = this;
    this.children = this.children || [];
    this.children.push(child);
    if (this.hasInternalFlag(InternalActorFlags.ENTERED)) {
      child.traverse(actor => actor.enter());
    }
  }
  removeChild(child) {
    if (child.parent !== this) { throw new Error('not yo babies momma'); }
    child.stage = null;
    child.parent = null;
    const index = this.children.indexOf(child);
    if (index >= 0) {
      this.children.splice(index, 1);
    }
    if (this.hasInternalFlag(InternalActorFlags.ENTERED)) {
      child.traverse(actor => actor.exit());
    }
  }
  removeCompleteBehaviors() {
    for (let i = this.behaviors.length; i >= 0; --i) {
      if (this.behaviors[i].isComplete) {
        this.behaviors.splice(i, 1);
      }
    }
  }
  enter() {
    if (this.hasInternalFlag(InternalActorFlags.ENTERED)) {
      throw new Error('invalid entered state');
    }
    this.enableInternalFlag(InternalActorFlags.ENTERED);
    if (this.behaviors) {
      for (let i = 0; i < this.behaviors.length; ++i) {
        this.behaviors[i].enter(this);
      }
      this.removeCompleteBehaviors();
    }
  }
  exit() {
    if (!this.hasInternalFlag(InternalActorFlags.ENTERED)) {
      throw new Error('invalid entered state');
    }
    if (this.behaviors) {
      for (let i = 0; i < this.behaviors.length; ++i) {
        this.behaviors[i].exit(this);
      }
      this.removeCompleteBehaviors();
    }
    this.disableInternalFlag(InternalActorFlags.ENTERED);
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
    if (this.drawable) {
      ctx.modelMatrix = this.modelMatrix;
      this.drawable.draw(ctx);
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

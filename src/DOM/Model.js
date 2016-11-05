import { Matrix4, Vector3, Quaternion, Pose } from '../Math';
import ModelFlags from './ModelFlags';

const InternalModelFlags = {
  ENTERED: 1,
};

export default class Model {
  constructor(init) {
    this.flags = 0;
    this.internalFlags = 0;
    this.scene = null;
    this.parent = null;
    this.children = null;
    this.pose = new Pose();
    this.modelMatrix = Matrix4.create();
    this.behaviors = (init && init.behaviors) || null;
    this.drawable = null;
    if ((init && init.drawable)) {
      this.setDrawable(init.drawable);
    }
    if (this.behaviors && this.behaviors.length > 0) {
      this.enableFlag(ModelFlags.UPDATE);
    }
  }
  hasFlag(flag) {
    // eslint-disable-next-line no-bitwise
    return this.flags & flag !== 0;
  }
  enableFlag(flag) {
    // eslint-disable-next-line no-bitwise
    this.flags |= flag;
    if (this.scene) {
      this.scene.needsRebuild = true;
    }
  }
  disableFlag(flag) {
    // eslint-disable-next-line no-bitwise
    this.flags &= ~flag;
    if (this.scene) {
      this.scene.needsRebuild = true;
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
    this.enableFlag(ModelFlags.DRAW);
  }
  addChild(child) {
    if (child.parent !== null) { throw new Error('child already parented'); }
    child.scene = this.scene;
    child.parent = this;
    this.children = this.children || [];
    this.children.push(child);
    if (this.hasInternalFlag(InternalModelFlags.ENTERED)) {
      child.traverse(model => model.enter());
    }
  }
  removeChild(child) {
    if (child.parent !== this) { throw new Error('not yo babies momma'); }
    child.scene = null;
    child.parent = null;
    const index = this.children.indexOf(child);
    if (index >= 0) {
      this.children.splice(index, 1);
    }
    if (this.hasInternalFlag(InternalModelFlags.ENTERED)) {
      child.traverse(model => model.exit());
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
    if (this.hasInternalFlag(InternalModelFlags.ENTERED)) {
      throw new Error('invalid entered state');
    }
    this.enableInternalFlag(InternalModelFlags.ENTERED);
    if (this.behaviors) {
      for (let i = 0; i < this.behaviors.length; ++i) {
        this.behaviors[i].enter(this);
      }
      this.removeCompleteBehaviors();
    }
  }
  exit() {
    if (!this.hasInternalFlag(InternalModelFlags.ENTERED)) {
      throw new Error('invalid entered state');
    }
    if (this.behaviors) {
      for (let i = 0; i < this.behaviors.length; ++i) {
        this.behaviors[i].exit(this);
      }
      this.removeCompleteBehaviors();
    }
    this.disableInternalFlag(InternalModelFlags.ENTERED);
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
      Matrix4.multiply(this.modelMatrix, this.parent.modelMatrix, this.pose.matrix);
    } else {
      Matrix4.copy(this.modelMatrix, this.pose.matrix);
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
  render(ctx) {
    if (this.drawable) {
      ctx.modelMatrix = this.modelMatrix;
      this.drawable.render(ctx);
    }
  }
  setPose(pose) {
    pose.copyTo(this.pose);
    return this;
  }
  moveTo(x, y, z) {
    Vector3.set(this.pose.position, x, y, z);
    return this;
  }
  lookAt(x, y, z) {
    Matrix4.lookAt(this.pose.matrix,
                this.pose.position,
                Vector3.fromValues(x, y, z),
                Vector3.fromValues(0, 1, 0));
    Matrix4.getRotation(this.pose.orientation, this.pose.matrix);
    Quaternion.invert(this.pose.orientation, this.pose.orientation);
    return this;
  }
}

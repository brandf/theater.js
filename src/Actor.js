import { mat4 } from 'gl-matrix';
import SceneObj from './SceneObj';
import Pose from './Pose';

export default class Actor extends SceneObj {
  constructor() {
    super();
    this.pose = new Pose();
    this.modelMatrix = mat4.create();
  }
  update(time) {
    this.updateAnimations(time);
    this.updateMatrix();
  }
  // eslint-disable-next-line class-methods-use-this
  updateAnimations(/* time */) {
    // todo
  }
  updateMatrix() {
    this.pose.updateMatrix();
    if (this.parent) {
      mat4.multiply(this.modelMatrix, this.parent.modelMatrix, this.pose.matrix);
    } else {
      mat4.copy(this.modelMatrix, this.pose.matrix);
    }
  }
  // eslint-disable-next-line class-methods-use-this
  draw(/* camera */) {

  }
}

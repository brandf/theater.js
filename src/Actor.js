import { mat4, vec3 } from 'gl-matrix';
import SceneObj from './SceneObj';
import Pose from './Pose';

export default class Actor extends SceneObj {
  constructor(init) {
    super();
    this.pose = new Pose();
    this.modelMatrix = mat4.create();
    this.material = (init && init.material) || null;
    this.geometry = (init && init.geometry) || null;
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
  draw(time, camera) {
    if (this.material && this.geometry) {
      this.geometry.draw(this.material, {
        time,
        modelMatrix: this.modelMatrix,
        viewMatrix: camera.viewMatrix,
        projMatrix: camera.projMatrix,
      });
    }
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
  }
}

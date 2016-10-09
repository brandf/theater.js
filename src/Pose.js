import { mat4, vec3, quat } from 'gl-matrix';

export default class Pose {
  constructor() {
    this.orientation = quat.create();
    this.position = vec3.create();
    this.scale = vec3.fromValues(1.0, 1.0, 1.0);
    this.matrix = mat4.create();
  }
  updateMatrix() {
    mat4.fromRotationTranslationScale(this.matrix,
                                      this.orientation,
                                      this.position,
                                      this.scale);
  }
}

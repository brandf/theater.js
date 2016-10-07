import { mat4, vec3, quat } from 'gl-matrix';

export default class Pose {
  constructor() {
    this.orientation = quat.create();
    this.position = vec3.create();
    this.scale = vec3.create();
    this.matrix = mat4.create();
  }
  updateMatrix() {
    mat4.fromRotationTranslationScale(this.matrix,
                                      this.orientation,
                                      this.position,
                                      this.scale);
  }
}

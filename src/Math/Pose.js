import { mat4, vec3, quat } from 'gl-matrix';

export default class Pose {
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

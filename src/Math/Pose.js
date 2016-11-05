import {
  mat4 as Matrix,
  vec3 as Vector3,
  quat as Quaternion,
} from 'gl-matrix';

export default class Pose {
  constructor(init) {
    this.orientation = (init && init.orientation) || Quaternion.create();
    this.position = (init && init.position) || Vector3.create();
    this.scale = (init && init.scale) || Vector3.fromValues(1.0, 1.0, 1.0);
    this.matrix = Matrix.create();
  }
  updateMatrix() {
    Matrix.fromRotationTranslationScale(this.matrix,
                                      this.orientation,
                                      this.position,
                                      this.scale);
  }
  lerp(p1, p2, t) {
    Quaternion.slerp(this.orientation, p1.orientation, p2.orientation, t);
    Vector3.lerp(this.position, p1.position, p2.position, t);
    Vector3.lerp(this.scale, p1.scale, p2.scale, t);
  }
  copyFrom(source) {
    Quaternion.copy(this.orientation, source.orientation);
    Vector3.copy(this.position, source.position);
    Vector3.copy(this.scale, source.scale);
  }
}

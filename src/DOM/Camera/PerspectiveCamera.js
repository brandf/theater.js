import { mat4 } from 'gl-matrix';
import Camera from './Camera';

export default class PerspectiveCamera extends Camera {
  constructor(init) {
    super(init);
    this.fov = (init && init.fov) || Math.PI / 2.0;
    this.near = (init && init.near) || 1.0;
    this.far = (init && init.far) || 1000.0;
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

import { mat4 } from 'gl-matrix';
import Camera from './Camera';

export default class OrthoCamera extends Camera {
  constructor(init) {
    super(init);
    this.left = (init && init.left) || 0;
    this.top = (init && init.top) || 0;
    this.right = (init && init.right) || null;
    this.bottom = (init && init.bottom) || null;
    this.near = (init && init.near) || 0.0;
    this.far = (init && init.far) || 1.0;
    this.updateProjection();
  }
  updateProjection() {
    mat4.ortho(this.projMatrix,
               this.left,
               this.right === null ? this.left + this.viewportWidth : this.right,
               this.top,
               this.bottom === null ? this.top + this.viewportHeight : this.bottom,
               this.near,
               this.far);
  }
}

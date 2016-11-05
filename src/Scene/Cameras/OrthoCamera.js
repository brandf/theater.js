import { Matrix } from '../../Math';
import Camera from './Camera';

export default class OrthoCamera extends Camera {
  constructor(init) {
    init = init || {};
    super(init);
    this.left = init.left || 0;
    this.top = init.top || 0;
    this.right = init.right || null;
    this.bottom = init.bottom || null;
    this.near = init.near || 0.0;
    this.far = init.far || 1.0;
    this.updateProjection();
  }
  updateProjection() {
    Matrix.ortho(this.projMatrix,
               this.left,
               this.right === null ? this.left + this.viewportWidth : this.right,
               this.top,
               this.bottom === null ? this.top + this.viewportHeight : this.bottom,
               this.near,
               this.far);
  }
}

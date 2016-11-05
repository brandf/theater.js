import { Matrix } from '../../Math';
import Camera from './Camera';

export default class PerspectiveCamera extends Camera {
  constructor(init) {
    init = init || {};
    super(init);
    this.fov = init.fov || Math.PI / 2.0;
    this.near = init.near || 1.0;
    this.far = init.far || 1000.0;
    this.updateProjection();
  }
  updateProjection() {
    Matrix.perspective(this.projMatrix,
                     this.fov,
                     this.viewportWidth / this.viewportHeight,
                     this.near,
                     this.far);
  }
}

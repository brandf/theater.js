import { Matrix } from '../../Math';
import Model from '../Model';
import ModelFlags from '../ModelFlags';

export default class Camera extends Model {
  constructor(init) {
    init = init || {};
    super();
    this.viewportWidth = init.viewportWidth || 512;
    this.viewportHeight = init.viewportHeight || 512;
    this.setFlag(ModelFlags.CAMERA);
    this.viewMatrix = Matrix.create();
    this.projMatrix = Matrix.create();
  }
  // eslint-disable-next-line class-methods-use-this
  updateProjection() {
  }
  updateView() {
    Matrix.invert(this.viewMatrix, this.modelMatrix);
  }
  updateViewport(width, height) {
    const oldWidth = this.viewportWidth;
    const oldHeight = this.viewportHeight;
    this.viewportWidth = width;
    this.viewportHeight = height;
    if (oldWidth !== width || oldHeight !== height) {
      this.updateProjection();
    }
  }
}

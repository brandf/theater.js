import { mat4 } from 'gl-matrix';
import Actor from '../Actor';
import ActorFlags from '../ActorFlags';

export default class Camera extends Actor {
  constructor(init) {
    super();
    this.viewportWidth = (init && init.viewportWidth) || 512;
    this.viewportHeight = (init && init.viewportHeight) || 512;
    this.setFlag(ActorFlags.CAMERA);
    this.viewMatrix = mat4.create();
    this.projMatrix = mat4.create();
  }
  // eslint-disable-next-line class-methods-use-this
  updateProjection() {
  }
  updateView() {
    mat4.invert(this.viewMatrix, this.modelMatrix);
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

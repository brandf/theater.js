import { Model } from './Model';
import { PerspectiveCamera } from './Camera/PerspectiveCamera';

export default class Layer {
  constructor(init) {
    this.stage = init.stage || new Model();
    this.camera = init.camera || new PerspectiveCamera();
    this.viewport = init.viewport;
    this.clearColor = init.clearColor || { r: 0, g: 0, b: 0 };
    this.clearDepth = init.clearDepth || false;
    this.target = init.target;
  }
  update(time, frame) {
    // only update stages once per frame
    if (this.stage.lastFrame < frame) {
      this.state.lastFrame = frame;
      this.stage.update(time);
    }
  }
  draw(theater, time) {
    if (this.viewport) {
      theater.gl.viewport(this.viewport.x,
                          this.viewport.y,
                          this.viewport.width,
                          this.viewport.height);
    } else {
      theater.gl.viewport(0,
                          0,
                          theater.gl.canvas.width,
                          theater.gl.canvas.height);
    }
    let clearFlags = this.clearDepth ? theater.gl.DEPTH_BUFFER_BIT : 0;
    if (this.clearColor) {
      theater.gl.clearColor(this.clearColor.r,
                            this.clearColor.g,
                            this.clearColor.b,
                            this.clearColor.a || 1.0);
      // eslint-disable-next-line no-bitwise
      clearFlags |= theater.gl.COLOR_BUFFER_BIT;
    }

    if (clearFlags) {
      theater.gl.clear(clearFlags);
    }

    const ctx = {
      time,
      camera: this.camera,
    };

    // TODO deal with render targets
    this.stage.draw(ctx);
  }
}

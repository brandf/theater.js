export default class Layer {
  constructor(init) {
    this.stage = init.stage;
    this.camera = init.camera;
    this.target = init.target;
  }
  update(time, frame) {
    // only update stages once per frame
    if (this.stage.lastFrame < frame) {
      this.state.lastFrame = frame;
      this.stage.update(time);
    }
  }
  draw(time) {
    const ctx = {
      time,
      camera: this.camera,
    };

    // TODO deal with render targets
    this.stage.draw(ctx);
  }
}

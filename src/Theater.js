export default class Theater {
  constructor(canvas) {
    this.gl = canvas.getContext(canvas);
    this.renderPasses = [];
    this.frameCallback = this.frame.bind(this);
    this.frame = 0;
    this.requestAnimationFrame = window.requestAnimationFrame.bind(window);
    this._continuous = true;
  }
  frame(time) {
    this.frame++;
    for (let i = 0; i < this.renderPasses.length; i++) {
      this.renderPasses[i].update(time, this.frame);
    }
    for (let i = 0; i < this.renderPasses.length; i++) {
      this.renderPasses[i].render(this, time);
    }
    if (this.continuous) {
      this.requestAnimationFrame(this.frameCallback);
    }
  }
}

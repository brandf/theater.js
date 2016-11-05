export default class Theater {
  constructor(canvas) {
    this.gl = canvas.getContext(canvas);
    this.layers = [];
    this.frameCallback = this.frame.bind(this);
    this.frame = 0;
    this.requestAnimationFrame = window.requestAnimationFrame.bind(window);
    this._continuous = true;
  }
  frame(time) {
    this.frame++;
    for (let i = 0; i < this.layers.length; i++) {
      this.layers[i].update(time, this.frame);
    }
    for (let i = 0; i < this.layers.length; i++) {
      this.layers[i].render(this, time);
    }
    if (this.continuous) {
      this.requestAnimationFrame(this.frameCallback);
    }
  }
}

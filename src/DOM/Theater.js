export default class Theater {
  constructor(canvas) {
    this.gl = canvas.getContext(canvas);
    this.layers = [];
    this.tickCallback = this.tick.bind(this);
    this.frame = 0;
    this.requestAnimationFrame = window.requestAnimationFrame.bind(window);
    this._continuous = true;
  }
  tick(time) {
    this.frame++;
    for (let i = 0; i < this.layers.length; i++) {
      this.layers[i].update(time, this.frame);
    }
    for (let i = 0; i < this.layers.length; i++) {
      this.layers[i].draw(this, time);
    }
    if (this.continuous) {
      this.requestAnimationFrame(this.tickCallback);
    }
  }
}

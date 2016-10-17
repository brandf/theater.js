import twgl from 'twgl.js';

export default class Theater {
  constructor(canvas) {
    this.layers = [];
    this.continuous = true;
    this.tickCallback = this.tick.bind(this);
    this.frame = 0;
    this.initWGL(canvas);
  }
  tick(time) {
    this.resetState();
    this.frame++;
    for (let i = 0; i < this.layers.length; i++) {
      this.layers[i].update(time, this.frame);
    }
    for (let i = 0; i < this.layers.length; i++) {
      this.layers[i].draw(time);
    }
    if (this.continuous) {
      window.requestAnimationFrame(this.tickCallback);
    }
  }
  initWGL(canvas) {
    twgl.setDefaults({ attribPrefix: 'a_' });
    const gl = twgl.getWebGLContext(canvas);
    this.gl = gl;
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.enable(gl.DEPTH_TEST);
  }
  resetState() {
    const gl = this.gl;
    twgl.resizeCanvasToDisplaySize(gl.canvas);
    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
    // eslint-disable-next-line no-bitwise
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
  }
}

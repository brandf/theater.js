import twgl from 'twgl.js';

class Layer {
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

    this.stage.draw(ctx);
  }
}

class Theater {
  constructor(canvas) {
    this.layers = null;
    this.continuous = true;
    this.tickCallback = this.tick.bind(this);
    this.frame = 0;
    this.initWGL(canvas);
  }
  setLayers(layers) {
    this.layers = layers;
  }
  tick(time) {
    this.resetState();
    this.frame++;
    if (this.layers) {
      for (let i = 0; i < this.layers.length; i++) {
        this.layers[i].update(time, this.frame);
      }
      for (let i = 0; i < this.layers.length; i++) {
        this.layers[i].draw(time);
      }
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

export {
  Layer,
  Theater,
};

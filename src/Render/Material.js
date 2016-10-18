import DynamicUniforms from './DynamicUniforms';
import WGLCodeGen from './WGLCodeGen';

const allDynamicUniformNames = Object.keys(DynamicUniforms);

export default class Material {
  constructor(gl, vs, fs) {
    this.gl = gl;
    this.program = this.createProgram(vs, fs);
    this.attribInfo = this.getAttributeInfo();
    this.uniformInfo = this.getUniformInfo();
    this.uniformStorage = this.createUniformStorage(this.uniformInfo);
    this.setUniforms = WGLCodeGen.createUniformSetter(this.uniformInfo);
  }
  use(ctx) {
    this.gl.useProgram(this.programInfo.shader);
    this.computeDynamicUniforms(ctx);
    this.setUniforms(this.gl, this.uniformStorage);
  }
  setUniforms(unifroms) {

  }
  computeDynamicUniforms(ctx) {

  }
  createProgram(vs, fs) {
    const vertexShader = this.loadShader(vs, this.gl.VERTEX_SHADER);
    const fragmentShader = this.loadShader(fs, this.gl.FRAGMENT_SHADER);
    const program = this.gl.createProgram();
    this.gl.attachShader(program, vertexShader);
    this.gl.attachShader(program, fragmentShader);
    this.gl.linkProgram(program);
    if (!this.gl.getProgramParameter(this.program, this.gl.LINK_STATUS)) {
      const error = this.gl.getProgramInfoLog(program);
      this.gl.deleteProgram(program);
      throw new Error(error);
    }
    return program;
  }
  loadShader(source, type) {
    const shader = this.gl.createShader(type);
    this.gl.shaderSource(shader, source);
    this.gl.compileShader(shader);
    if (!this.gl.getShaderParameter(shader, this.gl.COMPILE_STATUS)) {
      const error = this.gl.getShaderInfoLog(shader);
      this.gl.deleteShader(shader);
      throw new Error(error);
    }
    return shader;
  }
  getAttributeInfo() {
    const activeAttribs = this.gl.getProgramParameter(this.program, this.gl.ACTIVE_UNIFORMS);
    const attribs = {};
    for (let i = 0; i < activeAttribs; ++i) {
      const attrib = this.gl.getActiveAttrib(this.program, i);
      attribs[attrib.name] = {
        location: this.gl.getAttribLocation(program, attrib.name),
        attrib.type,
        attrib.size
      };
    }
    return attribs;
  }
  getUniformInfo() {
    const activeUniforms = this.gl.getProgramParameter(this.program, this.gl.ACTIVE_UNIFORMS);
    const uniforms = {};
    for (let i = 0; i < activeUniforms; ++i) {
      const uniform = this.gl.getActiveUniform(this.program, i);
      uniforms[uniform.name] = {
        location: this.gl.getUniformLocation(program, uniformInfo.name),
        uniform.type,
        uniform.size
      };
    }
    return uniforms;
  }
}

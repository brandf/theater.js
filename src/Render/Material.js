import twgl from 'twgl.js';
import DynamicUniforms from './DynamicUniforms';

const allDynamicUniformNames = Object.keys(DynamicUniforms);

export default class Material {
  constructor(scene, vs, fs, constUniforms) {
    this.gl = scene.gl;
    this.programInfo = twgl.createProgramInfo(this.gl, [vs, fs]);
    this.constUniforms = constUniforms || {};
    this.allocateDynamicUniforms();
  }
  allocateDynamicUniforms() {
    this.dynamicUniforms = {};
    this.dynamicUniformNames = Object.keys(this.programInfo.uniformSetters);
    for (let i = 0; i < allDynamicUniformNames.length; ++i) {
      const uniform = allDynamicUniformNames[i];
      if ({}.hasOwnProperty.call(this.constUniforms, uniform)) {
        // const uniforms override dynamic uniforms, so no need to compute it
        delete this.dynamicUniformNames[uniform];
      } else if (this.dynamicUniformNames.indexOf(uniform) >= 0) {
        // allocate storage for the dynamic uniform
        this.dynamicUniforms[uniform] = DynamicUniforms[uniform].allocate();
      }
    }
  }
  setUniforms(materialInfo) {
    this.computeDynamicUniforms(materialInfo);
    const uniforms = {
      ...this.dynamicUniforms,
      ...this.constUniforms,
    };
    twgl.setUniforms(this.programInfo, uniforms);
  }
  computeDynamicUniforms(materialInfo) {
    for (let i = 0; i < this.dynamicUniformNames.length; ++i) {
      const uniform = this.dynamicUniformNames[i];
      const currentValue = this.dynamicUniforms[uniform];
      if (currentValue === undefined) {
        throw new Error(`Unknown uniform: ${uniform}`);
      }
      this.dynamicUniforms[uniform] =
        DynamicUniforms[uniform].compute(materialInfo, this.dynamicUniforms[uniform]);
    }
  }
}

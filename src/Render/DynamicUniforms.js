import { mat4 } from 'gl-matrix';

// Material will automatically compute standard uniforms that may be used in a shader.
export default {
  u_time: {
    allocate() {
      return 0.0;
    },
    compute(materialInfo) {
      return materialInfo.time;
    },
  },
  u_modelViewProj: {
    allocate() {
      return mat4.create();
    },
    compute(materialInfo, currentValue) {
      mat4.multiply(currentValue, materialInfo.viewMatrix, materialInfo.modelMatrix);
      mat4.multiply(currentValue, materialInfo.projMatrix, currentValue);
      return currentValue;
    },
  },
  u_modelView: {
    allocate() {
      return mat4.create();
    },
    compute(materialInfo, currentValue) {
      mat4.multiply(currentValue, materialInfo.viewMatrix, materialInfo.modelMatrix);
      return currentValue;
    },
  },
  u_viewProj: {
    allocate() {
      return mat4.create();
    },
    compute(materialInfo, currentValue) {
      mat4.multiply(currentValue, materialInfo.projMatrix, materialInfo.viewMatrix);
      return currentValue;
    },
  },
  u_model: {
    allocate() {
      return mat4.create();
    },
    compute(materialInfo, currentValue) {
      mat4.copy(currentValue, materialInfo.modelMatrix);
      return currentValue;
    },
  },
  u_view: {
    allocate() {
      return mat4.create();
    },
    compute(materialInfo, currentValue) {
      mat4.copy(currentValue, materialInfo.viewMatrix);
      return currentValue;
    },
  },
  u_proj: {
    allocate() {
      return mat4.create();
    },
    compute(materialInfo, currentValue) {
      mat4.copy(currentValue, materialInfo.projMatrix);
      return currentValue;
    },
  },
};

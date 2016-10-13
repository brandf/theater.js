import twgl from 'twgl.js';
import { mat4 } from 'gl-matrix';

class VertexFormat {
  constructor(attribs) {
    this.attribs = attribs;
    this.size = 0;
  }
}

class VertexBuffer {
  constructor(vertexFormat, numVertices) {
    this.format = vertexFormat;
  }
  pushVertex(vertex) {

  }
}

class IndexBuffer {
  constructor(numIndices) {

  }
  pushLine(i1, i2) {

  }
  pushTriangle(i1, i2, i3) {

  }
}

// Material will automatically compute standard uniforms that may be used in a shader.
const allDynamicUniforms = {
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

const allDynamicUniformNames = Object.keys(allDynamicUniforms);

class Material {
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
        this.dynamicUniforms[uniform] = allDynamicUniforms[uniform].allocate();
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
        allDynamicUniforms[uniform].compute(materialInfo, this.dynamicUniforms[uniform]);
    }
  }
}

const PrimativeType = {
  LINES: 0,
  TRIANGLES: 1,
};

class Prop {
  constructor(theater, material, propType, vertexBuffer, indexBuffer) {
    this.theater = theater;
    this.material = material;
    this.propType = propType;
    this.vertexBuffer = vertexBuffer;
    this.indexBuffer = indexBuffer;
  }
  draw(ctx) {
    this.gl.useProgram(this.material.programInfo.program);
    twgl.setBuffersAndAttributes(this.gl, this.material.programInfo, this.bufferInfo);
    this.material.setUniforms(ctx);
    twgl.drawBufferInfo(this.gl, this.bufferType, this.bufferInfo);
  }
}

export {
  VertexFormat,
  IndexBuffer,
  VertexBuffer,
  Material,
  PrimativeType,
  Prop,
};

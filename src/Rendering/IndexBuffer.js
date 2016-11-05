import PrimitiveType from './PrimitiveType';

export default class IndexBuffer {
  constructor(gl, primitiveType, numPrimitives) {
    this.gl = gl;
    this.primitiveType = primitiveType;
    this.numPrimitives = numPrimitives;
    this.array = new Float32Array(numPrimitives * (primitiveType === PrimitiveType.LINES ? 2 : 3));
    this.buffer = gl.createBuffer();
    this.dirty = true;
  }
  set(index, indices) {
    this.dirty = true;
    let offset = index;
    if (this.primitiveType === PrimitiveType.LINES) {
      offset *= 2;
      this.array[offset++] = indices[0];
      this.array[offset] = indices[1];
    } else {
      offset *= 3;
      this.array[offset++] = indices[0];
      this.array[offset++] = indices[1];
      this.array[offset] = indices[2];
    }
  }
  get(index) {
    let offset = index;
    if (this.primitiveType === PrimitiveType.LINES) {
      offset *= 2;
      return [this.array[offset], this.array[offset + 1]];
    }
    offset *= 3;
    return [this.array[offset], this.array[offset + 1], this.array[offset + 2]];
  }
  use() {
    this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.buffer);
    this.ensureUploaded();
  }
  ensureUploaded() {
    if (this.dirty) {
      this.gl.bufferData(this.gl.ELEMENT_ARRAY_BUFFER, this.array, this.gl.STATIC_DRAW);
    }
  }
}

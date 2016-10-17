import PrimitiveType from './PrimitiveType';

export default class IndexBuffer {
  constructor(primitiveType, numPrimitives) {
    this.primitiveType = primitiveType;
    this.buffer = new Float32Array(numPrimitives * (primitiveType === PrimitiveType.LINES ? 2 : 3));
  }
  set [index](indices) {
    let offset = index;
    if (this.primitiveType === PrimitiveType.LINES) {
      offset *= 2;
      this.buffer[offset++] = indices[0];
      this.buffer[offset] = indices[1];
    } else {
      offset *= 3;
      this.buffer[offset++] = indices[0];
      this.buffer[offset++] = indices[1];
      this.buffer[offset] = indices[2];
    }
  }
  get [index]() {
    let offset = index;
    if (this.primitiveType === PrimitiveType.LINES) {
      offset *= 2;
      return [this.buffer[offset], this.buffer[offset + 1]];
    } else {
      offset *= 3;
      return [this.buffer[offset], this.buffer[offset + 1], this.buffer[offset + 2]];
    }
  }
}

import twgl from 'twgl.js';
import IndexBuffer from './IndexBuffer';

export default class Drawable {
  constructor(theater, material, vertexBuffer, indexBufferOrPrimitiveType) {
    this.theater = theater;
    this.material = material;
    this.vertexBuffer = vertexBuffer;
    this.indexBuffer = indexBufferOrPrimitiveType instanceof IndexBuffer ?
                        indexBufferOrPrimitiveType :
                        null;
    this.primitiveType = this.indexBuffer ?
                        this.indexBuffer.type :
                        indexBufferOrPrimitiveType;
  }
  draw(ctx) {
    this.gl.useProgram(this.material.programInfo.program);
    twgl.setBuffersAndAttributes(this.gl, this.material.programInfo, this.bufferInfo);
    this.material.setUniforms(ctx);
    twgl.drawBufferInfo(this.gl, this.bufferType, this.bufferInfo);
  }
}

import IndexBuffer from './IndexBuffer';
import PrimitiveType from './PrimitiveType';

export default class Renderable {
  constructor(gl, material, vertexBuffer, indexBufferOrPrimitiveType) {
    this.gl = gl;
    this.material = material;
    this.vertexBuffer = vertexBuffer;
    this.indexBuffer = indexBufferOrPrimitiveType instanceof IndexBuffer ?
                        indexBufferOrPrimitiveType :
                        null;
    this.primitiveType = this.indexBuffer ?
                        this.indexBuffer.type :
                        indexBufferOrPrimitiveType;
  }
  render(ctx) {
    this.material.use(ctx);
    this.vertexBuffer.use(this.material.attribLocations);
    if (this.indexBuffer) {
      this.indexBuffer.use();
    }
    const primitiveType = this.primitiveType === PrimitiveType.LINES ?
                            this.gl.LINES :
                            this.gl.TRIANGLES;
    if (this.indexBuffer) {
      const count = this.indexBuffer.numPrimitives *
                    this.primitiveType === PrimitiveType.LINES ? 2 : 3;
      this.gl.drawElements(primitiveType, count, this.gl.UNSIGNED_SHORT, 0);
    } else {
      this.gl.drawArrays(primitiveType, 0, this.vertexBuffer.numVertices);
    }
  }
}

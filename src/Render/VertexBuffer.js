export default class VertexBuffer {
  constructor(vertexFormat, numVertices) {
    this.vertexFormat = vertexFormat;
    this.vertexSize = vertexFormat.reduce(attrib => attrib.size, 0);
    this.buffer = new Float32Array(this.vertexSize.size * numVertices);
  }
  set [index](vertex) {
    let offset = this.vertexSize * index;
    for (let i = 0; i < this.vertexFormat.length; ++i) {
      const attrib = this.vertexFormat[i];
      const component = vertex[attrib.name];
      for (let j = 0; j < attrib.size; ++j) {
        this.buffer[offset++] = component[j];
      }
    }
  }
  get [index]() {
    let offset = this.vertexSize * index;
    const vertex = {};
    for (let i = 0; i < this.vertexFormat.length; ++i) {
      const attrib = this.vertexFormat[i];
      const components = [];
      for (let j = 0; j < attrib.size; ++j) {
        components.push(this.buffer[offset++]);
      }
      vertex[attrib.name] = components;
    }
    return vertex;
  }
}

export default class VertexBuffer {
  constructor(gl, vertexFormat, numVertices) {
    this.gl = gl;
    this.vertexFormat = vertexFormat;
    this.vertexSize = vertexFormat.reduce(attrib => attrib.size, 0);
    this.numVertices = numVertices;
    this.array = new Float32Array(this.vertexSize.size * numVertices);
    this.buffer = gl.createBuffer();
    this.dirty = true;
  }
  set(index, vertex) {
    this.dirty = true;
    let offset = this.vertexSize * index;
    for (let i = 0; i < this.vertexFormat.length; ++i) {
      const attrib = this.vertexFormat[i];
      const component = vertex[attrib.name];
      for (let j = 0; j < attrib.size; ++j) {
        this.array[offset++] = component[j];
      }
    }
  }
  get(index) {
    let offset = this.vertexSize * index;
    const vertex = {};
    for (let i = 0; i < this.vertexFormat.length; ++i) {
      const attrib = this.vertexFormat[i];
      const components = [];
      for (let j = 0; j < attrib.size; ++j) {
        components.push(this.array[offset++]);
      }
      vertex[attrib.name] = components;
    }
    return vertex;
  }
  use(attribs) {
    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.buffer);
    this.ensureUploaded();
    if (attribs) {
      let offset = 0;
      const stride = this.vertexSize * 4;
      for (let i = 0; i < this.vertexFormat.length; ++i) {
        const attrib = attribs[this.vertexFormat[i].name];
        if (attrib !== undefined) {
          this.gl.enableVertexAttribArray(attrib.location);
          this.gl.vertexAttribPointer(attrib.location,
                                      this.vertexFormat[i].size,
                                      this.gl.FLOAT,
                                      false, // normalize
                                      stride,
                                      offset);
        }

        offset += this.vertexFormat[i].size * 4;
      }
    }
  }
  ensureUploaded() {
    if (this.dirty) {
      this.gl.bufferData(this.gl.ARRAY_BUFFER, this.array, this.gl.STATIC_DRAW);
    }
  }
}

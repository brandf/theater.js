import { mat4 } from 'gl-matrix';
import Actor from './Actor';

export default class Camera extends Actor {
  constructor() {
    super();
    this.viewMatrix = mat4.create();
    this.projMatrix = mat4.create();
    this.fov = Math.PI / 2.0;
    this.near = 1.0;
    this.far = 1000.0;
    this.viewportWidth = 512;
    this.viewportHeight = 512;
  }
  updateProjection() {
    mat4.perspective(this.projMatrix,
                     this.fov,
                     this.viewportWidth / this.viewportHeight,
                     this.near,
                     this.far);
  }
  updateMatrix() {
    super.updateMatrix();
    mat4.invert(this.viewMatrix, this.modelMatrix);
  }
}

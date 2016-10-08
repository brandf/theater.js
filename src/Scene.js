import SceneObj from './SceneObj';
import Camera from './Camera';

export default class Scene extends SceneObj {
  constructor() {
    super();
    this.camera = null;
  }
  addChild(child) {
    super.addChild(child);
    // If you add a camera, and we don't already have one, use it.
    if (!this.camera && child instanceof Camera) {
      this.camera = child;
    }
  }
  tick(time) {
    this.updateScene(time);
    this.drawScene(time);
  }
  updateScene(time) {
    this.traverse('update', time);
  }
  drawScene(time) {
    if (this.camera) {
      this.traverse('draw', time, this.camera);
    }
  }
}

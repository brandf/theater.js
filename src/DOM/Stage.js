import Model from './Model';
import ModelFlags from './ModelFlags';

export default class Stage extends Model {
  constructor() {
    super();
    this.stage = this;
    this.needsRebuild = false;
    this.lastFrame = 0;
    this.modelFlagKeys = Object.keys(ModelFlags);
    this.modelFlags = this.modelFlagKeys.map(k => ModelFlags[k]);
    this.modelFlagLists = {};
    for (let i = 0; i < this.modelFlags.length; ++i) {
      this.modelFlagLists[this.modelFlagKeys[i]] = [];
    }
    this.enter();
  }
  rebuild() {
    // reset lists
    for (let i = 0; i < this.modelFlags.length; ++i) {
      this.modelFlagLists[this.modelFlagKeys[i]].length = 0;
    }

    // traverse the tree to rebuild lists
    this.traverse((model) => {
      for (let i = 0; i < this.modelFlagKeys.length; ++i) {
        if (model.hasFlag(this.modelFlags[i])) {
          this.modelFlagLists[this.modelFlagKeys[i]].push(model);
        }
      }
    });
  }
  update(time) {
    if (this.needsRebuild) {
      this.rebuild();
    }
    let i;
    let list = this.modelFlagLists.PRE_UPDATE;
    let len = list.len;
    for (i = 0; i < len; ++i) {
      list[i].preUpdate(time);
    }
    list = this.modelFlagLists.MATRIX_UPDATE;
    len = list.len;
    for (i = 0; i < len; ++i) {
      list[i].updateMatrix(time);
    }
    list = this.modelFlagLists.CAMERA;
    len = list.len;
    for (i = 0; i < len; ++i) {
      list[i].updateView();
    }
    list = this.modelFlagLists.POST_UPDATE;
    len = list.len;
    for (i = 0; i < len; ++i) {
      list[i].postUpdate(time);
    }
  }
  draw(ctx) {
    const list = this.modelFlagLists.DRAW;
    const len = list.len;
    for (let i = 0; i < len; ++i) {
      list[i].draw(ctx);
    }
  }
}

import Actor from './Actor';
import ActorFlags from './ActorFlags';

export default class Stage extends Actor {
  constructor() {
    super();
    this.stage = this;
    this.needsRebuild = false;
    this.lastFrame = 0;
    this.actorFlagKeys = Object.keys(ActorFlags);
    this.actorFlags = this.actorFlagKeys.map(k => ActorFlags[k]);
    this.actorFlagLists = {};
    for (let i = 0; i < this.actorFlags.length; ++i) {
      this.actorFlagLists[this.actorFlagKeys[i]] = [];
    }
    this.enter();
  }
  rebuild() {
    // reset lists
    for (let i = 0; i < this.actorFlags.length; ++i) {
      this.actorFlagLists[this.actorFlagKeys[i]].length = 0;
    }

    // traverse the tree to rebuild lists
    this.traverse((actor) => {
      for (let i = 0; i < this.actorFlagKeys.length; ++i) {
        if (actor.hasFlag(this.actorFlags[i])) {
          this.actorFlagLists[this.actorFlagKeys[i]].push(actor);
        }
      }
    });
  }
  update(time) {
    if (this.needsRebuild) {
      this.rebuild();
    }
    let i;
    let list = this.actorFlagLists.PRE_UPDATE;
    let len = list.len;
    for (i = 0; i < len; ++i) {
      list[i].preUpdate(time);
    }
    list = this.actorFlagLists.MATRIX_UPDATE;
    len = list.len;
    for (i = 0; i < len; ++i) {
      list[i].updateMatrix(time);
    }
    list = this.actorFlagLists.CAMERA;
    len = list.len;
    for (i = 0; i < len; ++i) {
      list[i].updateView();
    }
    list = this.actorFlagLists.POST_UPDATE;
    len = list.len;
    for (i = 0; i < len; ++i) {
      list[i].postUpdate(time);
    }
  }
  draw(ctx) {
    const list = this.actorFlagLists.DRAW;
    const len = list.len;
    for (let i = 0; i < len; ++i) {
      list[i].draw(ctx);
    }
  }
}

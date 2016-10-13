import { Actor, ActorFlags } from './Actor';

export default class Stage extends Actor {
  constructor() {
    super();
    this.stage = this;
    this.needsRebuild = false;
    this.lastFrame = 0;
    this.preUpdateList = [];
    this.allActorsList = [];
    this.postUpdateList = [];
    this.drawList = [];
    this.lightList = [];
    this.cameraList = [];
  }
  addedActor() {
    this.needsRebuild = true;
  }
  removedActor() {
    this.needsRebuild = true;
  }
  rebuild() {
    this.preUpdateList.length = 0;
    this.allActorsList.length = 0;
    this.postUpdateList.length = 0;
    this.drawList.length = 0;
    this.lightList.length = 0;
    this.cameraList.length = 0;
    this.traverse((actor) => {
      this.allActorsList.push(actor);
      if (actor.hasFlag(ActorFlags.PRE_UPDATE)) {
        this.preUpdateList.push(actor);
      }
      if (actor.hasFlag(ActorFlags.POST_UPDATE)) {
        this.postUpdateList.push(actor);
      }
      if (actor.hasFlag(ActorFlags.DRAW)) {
        this.drawList.push(actor);
      }
      if (actor.hasFlag(ActorFlags.CAMERA)) {
        this.cameraList.push(actor);
      }
      if (actor.hasFlag(ActorFlags.LIGHT)) {
        this.lightList.push(actor);
      }
    });
  }
  update(time) {
    if (this.needsRebuild) {
      this.rebuild();
    }
    let i;
    let list = this.preUpdate;
    let len = list.len;
    for (i = 0; i < len; ++i) {
      list[i].preUpdate(time);
    }
    list = this.allActorsList;
    len = list.len;
    for (i = 0; i < len; ++i) {
      list[i].updateMatrix(time);
    }
    list = this.cameraList;
    len = list.len;
    for (i = 0; i < len; ++i) {
      list[i].updateView();
    }
    list = this.postUpdate;
    len = list.len;
    for (i = 0; i < len; ++i) {
      list[i].postUpdate(time);
    }
  }
  draw(ctx) {
    const list = this.drawList;
    const len = list.len;
    for (let i = 0; i < len; ++i) {
      list[i].draw(ctx);
    }
  }
}

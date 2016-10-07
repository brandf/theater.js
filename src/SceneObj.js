export default class SceneObj {
  constructor() {
    this.scene = null;
    this.parent = null;
    this.children = null;
  }
  addChild(child) {
    if (child.parent !== null) { throw new Error('child already parented'); }
    this.children = this.children || [];
    child.scene = this.scene;
    child.parent = this;
    this.children.push(child);
  }
  removeChild(child) {
    if (child.parent !== this) { throw new Error('not yo babies momma'); }
    child.scene = null;
    child.parent = null;
    const index = this.children.indexOf(child);
    if (index >= 0) {
      this.children.splice(index, 1);
    }
  }
  traverse(methodOrCallback, ...rest) {
    let callback = methodOrCallback;
    if (typeof callback === 'string') {
      callback = function callbackWrapper(obj, ...rest2) {
        if (obj[methodOrCallback]) {
          obj[methodOrCallback](...rest2);
        }
      };
    }
    const stack = [this];
    while (stack.length > 0) {
      const next = stack.pop();
      callback(next, ...rest);
      if (next.children) {
        stack.push(...next.children);
      }
    }
  }
}

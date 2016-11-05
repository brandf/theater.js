import PerspectiveCamera from '../Camera/PerspectiveCamera';
import ModelFlags from '../ModelFlags';

export default class SpotLight extends PerspectiveCamera {
  constructor(init) {
    super(init);
    this.setFlag(ModelFlags.LIGHT);
  }
}

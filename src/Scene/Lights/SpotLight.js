import PerspectiveCamera from '../Cameras/PerspectiveCamera';
import ModelFlags from '../ModelFlags';

export default class SpotLight extends PerspectiveCamera {
  constructor(init) {
    super(init);
    this.setFlag(ModelFlags.LIGHT);
  }
}

import OrthoCamera from '../Camera/OrthoCamera';
import ModelFlags from '../ModelFlags';

export default class DirectionalLight extends OrthoCamera {
  constructor(init) {
    super(init);
    this.setFlag(ModelFlags.LIGHT);
  }
}

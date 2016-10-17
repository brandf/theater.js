import OrthoCamera from '../Camera/OrthoCamera';
import ActorFlags from '../ActorFlags';

export default class DirectionalLight extends OrthoCamera {
  constructor(init) {
    super(init);
    this.setFlag(ActorFlags.LIGHT);
  }
}

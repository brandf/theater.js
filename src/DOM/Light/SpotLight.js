import PerspectiveCamera from '../Camera/PerspectiveCamera';
import ActorFlags from '../ActorFlags';

export default class SpotLight extends PerspectiveCamera {
  constructor(init) {
    super(init);
    this.setFlag(ActorFlags.LIGHT);
  }
}

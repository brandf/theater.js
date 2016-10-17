import Actor from '../Actor';
import ActorFlags from '../ActorFlags';

export default class PointLight extends Actor {
  constructor(init) {
    super(init);
    this.setFlag(ActorFlags.LIGHT);
  }
}

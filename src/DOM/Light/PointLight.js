import Model from '../Model';
import ModelFlags from '../ModelFlags';

export default class PointLight extends Model {
  constructor(init) {
    super(init);
    this.setFlag(ModelFlags.LIGHT);
  }
}

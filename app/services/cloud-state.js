import { tracked } from '@glimmer/tracking';
import Service from '@ember/service';

export default class CloudStateService extends Service {
  @tracked cloudPush = false;
  @tracked cloudPull = false;

  setPush(val) {
    this.cloudPush = val;
  }

  setPull(val) {
    this.cloudPull = val;
  }
}

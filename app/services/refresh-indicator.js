import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { later } from '@ember/runloop';

export default class RefreshIndicatorService extends Service {
  @tracked spin = false;

  kickSpin() {
    if (!this.spin) {
      this.spin = true;
      //Set `spin = false` after a timeout.
      later(() => {
        this.spin = false;
      }, 1000);
    }
  }
}

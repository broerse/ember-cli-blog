import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class ApplicationRoute extends Route {
  @service session;
  @service currentUser;

  async beforeModel() {
    await this.session.setup();
  }

  @action willTransition() {
    this.currentUser.expandMenu = false;
  }
}

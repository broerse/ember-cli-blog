import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class ApplicationRoute extends Route {
  @service session;
  @service currentUser;
  @service intl;

  beforeModel() {
    super.init(...arguments);
    this.session.setup();    
    return this.intl.setLocale(['en-us']);
  }

  @action willTransition() {
    this.currentUser.expandMenu = false;
  }
}

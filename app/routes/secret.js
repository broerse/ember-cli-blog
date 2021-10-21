import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class SecretRoute extends Route {
  // do your secret model setup here
  @service session;
  
  beforeModel(transition) {
    this.session.requireAuthentication(transition, 'login');
  }
  
}

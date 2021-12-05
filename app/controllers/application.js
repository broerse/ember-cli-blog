import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class ApplicationController extends Controller {
  @service session;
  @service cloudState;
  @service currentUser;

  @action logout() {
    this.session.invalidate();
  }

  @action toggleMenu() {
    this.currentUser.expandMenu = !this.currentUser.expandMenu;
  }

  @action closeMenu() {
    this.currentUser.expandMenu = false;
  }
}

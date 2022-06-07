import Controller from '@ember/controller';
import { action, set } from '@ember/object';
import { inject as service } from '@ember/service';

export default class LoginController extends Controller {
  @service session;
  @service router;

  @action authenticate(event) {
    const { target } = event;
    let identification = target.querySelector('#username').value;
    let password = target.querySelector('#password').value;
    event.preventDefault();
    this.session
      .authenticate('authenticator:pouch', identification, password)
      .then(() => {
        set(this, 'username', '');
        set(this, 'password', '');
      })
      .catch((reason) => {
        this.errorMessage = reason.message || reason;
      });
  }
}

import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class AuthorRoute extends Route {
  @service store;
  @service currentUser;

  model(params) {
    return this.store.findRecord('author', params.author_id);
  }

  afterModel(model) {
    if (model) {
      this.currentUser.isViewing = true;
    } else {
      this.currentUser.isViewing = false;
    }
  }

  @action willTransition() {
    this.currentUser.isViewing = false;
    this.currentUser.isEditing = false;
  }
}

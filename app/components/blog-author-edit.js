import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class BlogAuthorEditComponent extends Component {
  @service currentUser;

  @action edit() {
    this.currentUser.isEditing = true;
  }
  @action doneEditing() {
    this.currentUser.isEditing = false;
    this.args.saveAuthor();
  }
}

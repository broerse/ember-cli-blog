import Controller from '@ember/controller';
import { action } from "@ember/object";
import { inject as service } from '@ember/service';

export default class AuthorController extends Controller {
  @service router;
  @service currentUser;

  @action goBack () {
    this.currentUser.isViewing = false;
    this.router.transitionTo('authors');
  }

  @action saveAuthor() {
    this.model.save();
  }

  @action deleteAuthor() {
    let posts = this.model.get('posts').toArray();
    this.model.destroyRecord().then(() => {
      posts.forEach((post)=>{ post.destroyRecord(); });
      this.router.transitionTo('authors');
    });
  }
}

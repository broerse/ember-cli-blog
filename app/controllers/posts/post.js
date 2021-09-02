import Controller, { inject }  from '@ember/controller';
import { action } from "@ember/object";
import { inject as service } from '@ember/service';

export default class PostController extends Controller {
  @inject ('posts') posts;
  @service router;

  @action savePost () {
    this.model.save();
  }
  @action deletePost() {
    this.model.destroyRecord().then(() => {
      this.router.transitionTo('posts');
    });
  }
}

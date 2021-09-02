import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from "@ember/object";
import { inject as service } from '@ember/service';

class QueryParamsObj {
  @tracked page = 1;
  @tracked perPage = 5;
  @tracked query = '';
}

export default class AuthorController extends Controller {
  @service currentUser;
  @service router;
  @service store;

  queryParams= [
    {'queryParamsObj.page': 'page'},
    {'queryParamsObj.perPage': 'perPage'},
    {'queryParamsObj.query': 'query'}
  ];
  queryParamsObj = new QueryParamsObj();

  @action createAuthor() {
    this.currentUser.isEditing = true;
    let newauthor = this.store.createRecord('author');
    this.router.transitionTo('authors.author', newauthor.save());
  }
}

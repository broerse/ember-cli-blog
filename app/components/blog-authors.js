import Component from '@glimmer/component';
import { action } from '@ember/object';
import { sort, alias } from '@ember/object/computed';
import pagedArray from 'ember-cli-pagination/computed/paged-array';
import computedFilterByQuery from 'ember-cli-filter-by-query';
import { inject as service } from '@ember/service';

export default class BlogAuthorsComponent extends Component {
  @service currentUser;

  authorsSorting = Object.freeze(['name']);
  @sort('args.authors', 'authorsSorting') arrangedContent;

  // `arrangedContent` is then used by this filter to create `filteredContent`
  @computedFilterByQuery(
    'arrangedContent',
    ['name'],
    'args.queryParamsObj.query',
    { conjunction: 'and', sort: false }
  )
  filteredContent;

  @pagedArray('filteredContent', {
    page: alias('parent.args.queryParamsObj.page'),
    perPage: alias('parent.args.queryParamsObj.perPage'),
  })
  pagedContent;

  @action resetPage() {
    this.args.queryParamsObj.page = 1;
  }
}

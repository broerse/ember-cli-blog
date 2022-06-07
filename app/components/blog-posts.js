import Component from '@glimmer/component';
import { action } from '@ember/object';
import { sort, alias } from '@ember/object/computed';
import pagedArray from 'ember-cli-pagination/computed/paged-array';
import computedFilterByQuery from 'ember-cli-filter-by-query';
import { inject as service } from '@ember/service';

// define the handling of the `templates/components/blog-posts.hbs` view, which is used by `posts.hbs` like so:
// => `<BlogPosts @posts={{this.model}} @queryParamsObj={{this.queryParamsObj}} @createPost={{this.createPost}}>{{outlet}}</BlogPosts>`
// `posts.hbs` gets its params by defining
// => queryParams= [
//     {'queryParamsObj.page': 'page'},
//     {'queryParamsObj.perPage': 'perPage'},
//     {'queryParamsObj.query': 'query'}
//    ];
// inside its controller located at `controllers/posts.js`
export default class BlogPostsComponent extends Component {
  @service currentUser;

  // take in `posts` from our view
  // and sort it via `postsSorting`
  // into `arrangedContent`
  postsSorting = Object.freeze(['date:desc']);
  @sort('args.posts', 'postsSorting') arrangedContent;

  // `arrangedContent` is then used by this filter to create `filteredContent`
  @computedFilterByQuery(
    'arrangedContent',
    ['title', 'body', 'authorName', 'excerpt'],
    'args.queryParamsObj.query',
    { conjunction: 'and', sort: false },
  )
  filteredContent;

  // `filteredContent` is then used by this to create the paged array
  // which is used by our view like so
  // => {{#each pagedContent as |post|}}
  // => {{page-numbers content=pagedContent}}
  @pagedArray('filteredContent', {
    page: alias('parent.args.queryParamsObj.page'),
    perPage: alias('parent.args.queryParamsObj.perPage'),
  })
  pagedContent;

  // define the actions, used by our view like so:
  // => `<button {{on "click" this.createPost}}>Create</button>`
  @action resetPage() {
    this.args.queryParamsObj.page = 1;
  }
}

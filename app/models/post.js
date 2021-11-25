import { readOnly } from '@ember/object/computed';
import { attr, belongsTo } from '@ember-data/model';
import { Model } from 'ember-pouch';

export default class PostModel extends Model {
  @attr('string', { defaultValue: '' }) title;
  @belongsTo('author') author;
  @attr('date') date;
  @attr('string', { defaultValue: '' }) excerpt;
  @attr('string', { defaultValue: '' }) body;

  // alias necessary for `components/blog-posts.hbs` usage of:
  // .property('arrangedContent.@each.title', 'arrangedContent.@each.authorName', 'query'),
  // as doing `arrangedContent.@each.author.name` returns https://github.com/DockYard/ember-composable-helpers/issues/177
  @readOnly('author.name') authorName;
}

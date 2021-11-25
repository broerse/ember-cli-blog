import { attr, hasMany } from '@ember-data/model';
import { Model } from 'ember-pouch';

export default class AuthorModel extends Model {
  @attr('string', { defaultValue: '' }) name;
  @hasMany('posts') posts;
}

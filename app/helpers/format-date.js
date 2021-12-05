import Helper from '@ember/component/helper';
import moment from 'moment';

export default class formatMarkdown extends Helper {
  compute(params) {
    return moment(params[0]).fromNow();
  }
}

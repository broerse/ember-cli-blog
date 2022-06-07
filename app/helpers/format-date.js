import Helper from '@ember/component/helper';
import moment from 'moment';

export default class formatDate extends Helper {
  compute(params) {
    return moment(params[0]).fromNow();
  }
}

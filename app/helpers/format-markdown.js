import Helper from '@ember/component/helper';
import { htmlSafe } from '@ember/template';
import { marked } from 'marked';

export default class formatMarkdown extends Helper {
  compute(params) {
    var result = '';
    if (params[0]) {
      result = htmlSafe(marked(params[0]));
    }
    return result;
  }
}

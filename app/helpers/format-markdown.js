import Helper from '@ember/component/helper';
import { htmlSafe } from '@ember/template';
import marked from 'marked';

export default class formatMarkdown extends Helper {
  compute(params) {
    return htmlSafe(marked(params[0]));
  }
}

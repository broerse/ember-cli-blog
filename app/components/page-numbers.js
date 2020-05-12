import PageNumbers from 'ember-cli-pagination/components/page-numbers';
import { action } from '@ember/object';
import Util from 'ember-cli-pagination/util';

export default class PageNumbersComponent extends PageNumbers  {

  @action pageClicked(number) {
    Util.log("PageNumbers#pageClicked number " + number);
    this.set("currentPage", number);
    this._runAction('action', number);
  }
  
  @action incrementPage(num) {
    const currentPage = Number(this.currentPage),
         totalPages = Number(this.totalPages);

    if(currentPage === totalPages && num === 1) { return false; }
    if(currentPage <= 1 && num === -1) { return false; }
    this.incrementProperty('currentPage', num);

    const newPage = this.currentPage;
    this._runAction('action', newPage);
  }

}

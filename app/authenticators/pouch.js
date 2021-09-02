import Pouch from 'ember-simple-auth-pouch/authenticators/pouch';
import { inject as service } from '@ember/service';

export default class PouchAuthenticator extends Pouch {
  @service store;
  
  getDb() {
    let pouchAdapter = this.store.adapterFor('application');//getOwner(this).lookup(`adapter:${pouchAdapterName}`);
    return pouchAdapter.remoteDb;
  }
}

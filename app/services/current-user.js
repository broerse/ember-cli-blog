import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class currentUserService extends Service {
  @tracked expandMenu = false;
  @tracked isEditing = false;
  @tracked isViewing = false;
}

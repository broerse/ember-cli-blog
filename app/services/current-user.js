import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class currentUserService extends Service {
  @tracked isEditing = false;
  @tracked isViewing = false;
}

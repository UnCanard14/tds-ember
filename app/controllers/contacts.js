import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';

export default class ContactsController extends Controller {
  @tracked datas;

  get contacts() {
    return this.datas;
  }

  get deleteteds() {
    return this.datas;
  }

  get deletetedsCount() {
    return this.datas;
  }
}

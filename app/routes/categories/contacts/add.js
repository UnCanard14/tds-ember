import Route from '@ember/routing/route';
import { action } from '@ember/object';

export default class CategoriesContactsAddRoute extends Route {
  model() {
    return {};
  }

  @action save(contact) {
    contact.save().then(() => {
      this.transistionTo('contact');
    });
  }
}

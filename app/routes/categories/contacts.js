import Route from '@ember/routing/route';
import { action } from '@ember/object';

export default class CategoriesContactsRoute extends Route {
  model(params) {
    return params.category_id;
  }

  setupController(controller, model) {
    controller.set('model', model);
  }

  willTransition() {
    return true;
  }

  @action delete(contact) {
    contact.deleteRecord();
  }

  @action cancelDeletetion(contacts) {
    contacts.forEach((t) => t.rollbackAttributes());
  }

  @action update(category, contact){

  }

  @action confirmDeletion(contacts) {
    contacts.save();
  }
}

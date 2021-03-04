import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
export default class CategoriesRoute extends Route {
  @service router;

  model() {
    return this.store.findAll('category');
  }

  afterModel(model, transition) {
    this.store.findAll('contact');
    if (model.length > 0 && transition.targetName === 'categories.index') {
      this.transitionTo('categories.contacts', model.get('firstObject'));
    }
  }
}

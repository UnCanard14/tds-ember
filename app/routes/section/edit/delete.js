import Route from '@ember/routing/route';
import { action } from '@ember/object';
import AbstractrouteRoute from "../../abstractroute";

export default class SectionEditDeleteRoute extends AbstractrouteRoute {
  model(params) {
    return this.store.findRecord('product', params.product_id);
  }

  @action deleteProduct(product) {
    product = this.store.createRecord('Product', product);
    product.destroyRecord().then(() => this.transitionTo('section'));
  }
}

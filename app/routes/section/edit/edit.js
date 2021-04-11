import Route from '@ember/routing/route';
import { action } from '@ember/object';
import RSVP from 'rsvp';
import AbstractrouteRoute from "../../abstractroute";

export default class SectionEditEditRoute extends AbstractrouteRoute {
  model(params) {
    return RSVP.hash({
      product: this.store.findRecord('product', params.product_id),
      sections: this.store.findAll('section'),
    });
  }

  @action editProduct(product) {
    product = this.store.createRecord('Product', product);
    product.save().then(() => this.transitionTo('section'));
  }
}

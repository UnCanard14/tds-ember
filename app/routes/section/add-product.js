import Route from '@ember/routing/route';
import { action } from '@ember/object';
import RSVP from 'rsvp';
import AbstractrouteRoute from "../abstractroute";

export default class SectionAddProductRoute extends AbstractrouteRoute {
  model() {
    var retour = RSVP.hash({
      product: {},
      sections: this.store.findAll('section'),
    });
    return retour;
  }

  @action addProduct(product) {
    console.log(product);
    product = this.store.createRecord('Product', product);
    product.save().then(() => this.transitionTo('section'));
  }
}

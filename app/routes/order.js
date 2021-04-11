import Route from '@ember/routing/route';
import RSVP from 'rsvp';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import AbstractrouteRoute from "./abstractroute";

export default class OrderRoute extends AbstractrouteRoute {
  @service userAuth;

  model(params) {
    return this.store.findRecord('order', params.order_id, {
      include: 'orderdetails.product,user',
    });
  }

  @action allCheck() {}

  @action progress(data) {
    $('#barProgress').progress('increment');
  }
}

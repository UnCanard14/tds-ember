import Route from '@ember/routing/route';
import AbstractrouteRoute from "./abstractroute";

export default class SectionRoute extends AbstractrouteRoute {
  model() {
    return this.store.findAll('section');
  }
}

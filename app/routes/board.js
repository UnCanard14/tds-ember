import Route from '@ember/routing/route';
import AbstractrouteRoute from './abstractroute';

export default class BoardRoute extends AbstractrouteRoute {
  model() {
    return this.userAuth.getUser();
 //   return this.store
 //     .findAll('odrder')
 //     .filterBy('idUser', this.userAuth.getUser());
  }
}

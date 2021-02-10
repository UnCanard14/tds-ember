import Route from '@ember/routing/route';
import { action, set } from '@ember/object';
import { datas, promos } from 'tds/data/datas';
import MesServices from 'tds/classes/services';

export default class Ex2Route extends Route {
  model(){
    return new MesServices(datas, promos);
  }

  @action toggleActive(s){
      set(s, 'active', !s.active);
  }

  @action
  valider(){
    this.transitionTo('/ex2/promo');
  }
}

import { filterBy } from '@ember/object/computed';

export default class Services{
  services=[];
  promos=[];
  @tracked enterValue = null;
  constructor(services, promo) {
    this.services = services;
    this.promos = promo;
  }

  get countActive(){
    return this.services.filterBy('active', true).length;
  }

  get sumActive(){
    let servicesActifs = this.services.filterBy('active', true);
    let r = 0
    servicesActifs.forEach(s=>{
      r+= s.price;
      });
    return r;
  }

  get coefPromo(){
    for (const [key, value] of Object.entries(this.promos)) {
      //console.log(`${key}: ${value}`);
      console.log(key);
      if (key == this.enterValue){
        return value;
      }
    }
    return 0;
  }

  get remise(){
    return this.sumActive * this.coefPromo;
  }

  get totalAvecRemise(){
    return this.sumActive - this.remise;
  }
}

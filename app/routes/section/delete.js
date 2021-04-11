import Route from '@ember/routing/route';
import { action } from '@ember/object';
import AbstractrouteRoute from "../abstractroute";

export default class SectionDeleteRoute extends AbstractrouteRoute {
  model(params) {
    return this.store.findRecord('section', params.section_id, { include: 'products' });
  }

  async deleteProducts(products) {
    while (products.firstObject) {
      let p = products.firstObject;
      await p.destroyRecord();
    }
  }

  @action deleteSection(section) {
    console.log(section);
    this.deleteProducts(section.products).then(() => {
      section.destroyRecord();
      this.transitionTo('section');
    });
  }
}

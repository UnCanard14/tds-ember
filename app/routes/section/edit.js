import Route from '@ember/routing/route';
import { action } from '@ember/object';
import AbstractrouteRoute from "../abstractroute";

export default class SectionEditRoute extends AbstractrouteRoute {
  model(params) {
    return this.store.findRecord('section', params.section_id, {
      include: 'products',
    });
  }

  @action editSection(data) {
    let section = this.store.createRecord('Section', data);
    section.save().then(() => this.transitionTo('section'));
  }
}

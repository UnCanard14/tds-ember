import Route from '@ember/routing/route';

export default class SectionDeleteRoute extends Route {
  model(params) {
    return this.store.findRecord('section', params.section_id);
  }
}

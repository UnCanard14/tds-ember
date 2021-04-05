import Route from '@ember/routing/route';
import { action } from '@ember/object';
import RSVP from 'rsvp';

export default class SectionAddRoute extends Route {
  model() {
      return {};
  }

  @action addSection(data) {
    let section = this.store.createRecord('Section', data);
    section.save().then(() => this.transitionTo('section'));
  }
}

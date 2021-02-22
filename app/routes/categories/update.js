import Route from '@ember/routing/route';
import { action } from '@ember/object';

export default class CategoriesUpdateRoute extends Route {
  renderTemplate() {
    this.render('categories.add');
  }

  @action save(contact){
    contact.save().then(()=>{
      this.transistionTo('category');
    });
  }
}

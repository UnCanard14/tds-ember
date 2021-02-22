import Route from '@ember/routing/route';
import MyCategories from 'tds/classes/contacts';

export default class CategoriesRoute extends Route {
  model(){
    return new MyCategories(this.store.findAll('categorie'));
  }
}

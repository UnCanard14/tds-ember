import Route from '@ember/routing/route';


export default class CategoriesContactsAddRoute extends Route {

  @action save(contact){
    contact.save().then(()=>{
      this.transistionTo('contact');
    });
  }
}

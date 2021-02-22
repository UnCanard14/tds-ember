import Route from '@ember/routing/route';

export default class CategoriesAddRoute extends Route {
  model(){
    return{};
  }

  @action save(data){
    let categorie = this.store.createRecord('categorie', data);
    categorie.save().then(
      ()=>this.transistionTo('categories')
    );
  }
}

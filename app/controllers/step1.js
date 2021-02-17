import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class Step1Controller extends Controller {
  dispoItems = [];
  includedItems = [];
  @tracked dispoItems_ = [];
  @tracked includedItems_ = [];

  changeDispo(elements){
    //undefined variable i dont know why ?
    //this.includedItems.pushObject(elements);
  }

  @action
  changeIncluded(elements){
    this.includedItems_ = elements;
  }

  @action
  add(source, dest, what){
    console.log(what);
    debugger;
    dest.pushObjects(what);
    source.removeObjects(what);
  }

  remove(source, dest, what){

  }
}

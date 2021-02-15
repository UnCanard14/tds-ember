import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';

export default class Step1Controller extends Controller {
  dispoItems = [];
  includedItems = [];
  @tracked dispoItems_ = [];
  @tracked includedItems_ = [];

  changeDispo(elements){

  }

  changeIncluded(elements){

  }

  add(source, dest, what){

  }

  remove(source, dest, what){

  }
}

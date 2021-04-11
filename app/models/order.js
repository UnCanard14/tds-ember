import Model, { attr, belongsTo, hasMany } from '@ember-data/model';


export default class OrderModel extends Model {
  @attr('date') dateCreation;
  @hasMany('orderdetail') orderdetails;
  get count() {
    return this.orderdetails.length;
  }
  @attr('string') status;
  @belongsTo('user') user;
  @attr('string') status;
  @attr('number') amount;
  // @attr('int') itemsNumber;
  // @attr('int ') missingNumber;
}

import Model, { attr } from '@ember-data/model';

export default class OrderModel extends Model {
  @attr('date') dateCreation;
  @attr('string') status;
  @attr('float') amount;
  @attr('float') toPay;
  @attr('int') itemsNumber;
  @attr('int') missingNumber;
}

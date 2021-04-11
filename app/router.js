import EmberRouter from '@ember/routing/router';
import config from 'tds/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('index', { path: '/' });
  this.route('board');
  this.route('logout');
  this.route('order', { path: 'order/:order_id' }, function () {
    this.route('prepare', { path: 'prepare/:order_id' });
  });
  this.route('section', function () {
    this.route('add');
    this.route('addProduct');
    this.route('delete', { path: 'delete/:section_id' });
    this.route('edit', { path: 'edit/:section_id' }, function () {
      this.route('delete', { path: '/delete/:product_id' });
      this.route('edit', { path: '/edit/:product_id' });
    });
  });
});

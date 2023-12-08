import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-laba-10-класс-уч-l');
  this.route('i-i-s-laba-10-класс-уч-e',
  { path: 'i-i-s-laba-10-класс-уч-e/:id' });
  this.route('i-i-s-laba-10-класс-уч-e.new',
  { path: 'i-i-s-laba-10-класс-уч-e/new' });
  this.route('i-i-s-laba-10-родитель-l');
  this.route('i-i-s-laba-10-родитель-e',
  { path: 'i-i-s-laba-10-родитель-e/:id' });
  this.route('i-i-s-laba-10-родитель-e.new',
  { path: 'i-i-s-laba-10-родитель-e/new' });
  this.route('i-i-s-laba-10-школа-l');
  this.route('i-i-s-laba-10-школа-e',
  { path: 'i-i-s-laba-10-школа-e/:id' });
  this.route('i-i-s-laba-10-школа-e.new',
  { path: 'i-i-s-laba-10-школа-e/new' });
});

export default Router;

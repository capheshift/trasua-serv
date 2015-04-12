import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('home');
  this.route('login');
  this.route('register');
  this.route('feed', function() {
    this.route('detail');
  });
  this.route('hookup');
});

export default Router;

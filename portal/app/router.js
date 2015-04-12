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
    this.route('new');
  });
  this.route('hookup');
  this.route('setting');
  this.route('about');
  this.route('profile', function() {
    this.route('edit');
  });
});

export default Router;

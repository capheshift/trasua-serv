import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    publish: function() {
      this.transitionTo('feed');
    }
  }
});

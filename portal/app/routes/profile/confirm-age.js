import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    confirm: function(){
      this.transitionTo('login');
    }
  }
});

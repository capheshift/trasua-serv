import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    updateProfile: function(){
      this.transitionTo('login');
    }
  }
});

import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    goBack: function(){
      this.transitionToRoute('feed.index');
    }
  }
});

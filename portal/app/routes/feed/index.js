import Ember from 'ember';

export default Ember.Route.extend({
  activate: function() {
    console.log('activate');
    var controller = this.controllerFor('feed.index');
    controller.updateData();
  },
  actions: {
    toNew: function(){
      this.transitionTo('feed.new');
    }
  }
});

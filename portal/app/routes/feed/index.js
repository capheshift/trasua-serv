import Ember from 'ember';

export default Ember.Route.extend({
  // model: function(){
  //   return navigator.geolocation.getCurrentPosition(function(position) {
  //     return position;
  //   });
  // },
  // setupController: function(controller, model){
  //   console.log('feed.index.position', model);
  // },
  activate: function() {
    var controller = this.controllerFor('feed.index');
    controller.updateData();
  }
});

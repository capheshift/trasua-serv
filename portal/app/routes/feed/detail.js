import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params){
    console.log('params', params);
    return params;
  },
  setupController: function(controller, model) {
    // Guess what the model is in this case?
    console.log(model);
    controller.set('model', model);
  },
  actions: {
    openLink: function(link){
      window.open(link, '_system', 'location=yes');
    }
  }
});

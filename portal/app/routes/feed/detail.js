import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params){
    console.log('params', params);
    return params;
  },
  setupController: function(controller, model) {
    var fbGraph = this.container.lookup('adapter:openfb');
    fbGraph.api({
      mothod: 'GET',
      path: '/me/photos?type=uploaded'
    }).then(function(data){
      console.log('pictures', data);
    });
    var marker;
    marker = {
      lat: model.latitude,
      lng: model.longitude,
      isDraggable: false
    };

    controller.set('model', model);
    controller.set('markers', [marker]);
  },
  actions: {
    openLink: function(link){
      window.open(link, '_system', 'location=yes');
    }
  }
});

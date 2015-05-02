import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params){
    return params;
  },
  setupController: function(controller, model){
    var pos = model.coords, marker, m,
      user = this.container.lookup('adapter:user-storage').getItem();

    marker = {
      lat: pos.latitude,
      lng: pos.longitude,
      isDraggable: false
    };
    // set location first
    m = {
      latitude: pos.latitude,
      longitude: pos.longitude,
      coords: pos,
      _user: user._id
    };

    controller.set('markers', [marker]);
    controller.set('zoom', 17);
    controller.set('mapCenter', {lat: pos.latitude, lng: pos.longitude});
    controller.set('phoneNumber', user.phoneNumber);
    controller.set('model', m);
  }
});

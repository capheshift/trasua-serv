import Ember from 'ember';

export default Ember.Controller.extend({
  model: {},
  init: function() {
    var m = this.get('model'),
      $this = this;
    navigator.geolocation.getCurrentPosition(function(position) {
      m.latitude = position.coords.latitude;
      m.longitude = position.coords.longitude;
      m.coords = position.coords;

      console.log('position', position, m);
      $this.set('model', m);
    });
  },
  actions: {
    create: function() {
      var feedAdap = this.container.lookup('adapter:feed'),
        model = {};
        // model = this.get('model');

      model.content = 'testing';
      console.log('create', model);
      feedAdap.create(model).then(function(data) {
        console.log('data', data);
      })
    }
  }
});

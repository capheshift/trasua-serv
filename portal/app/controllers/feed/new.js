import Ember from 'ember';

export default Ember.Controller.extend({
  model: {},
  content: 'ppp',
  init: function() {
    var m = this.get('model'),
      $this = this;
    navigator.geolocation.getCurrentPosition(function(position) {
      // set location first
      m.latitude = position.coords.latitude;
      m.longitude = position.coords.longitude;
      m.coords = position.coords;
      $this.set('model', m);
    });
  },
  actions: {
    create: function() {
      var feedApi = this.container.lookup('adapter:feed'),
        model = this.get('model'),
        $this = this;

      feedApi.create(model).then(function(data) {
        $this.transitionToRoute('feed');
      })
    }
  }
});

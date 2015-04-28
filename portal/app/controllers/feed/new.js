import Ember from 'ember';

export default Ember.Controller.extend({
  zoom: 17,
  inFlight: false,
  mapCenter: {lat: -1, lng: -1},
  markerModel: [],
  model: {},
  init: function() {
    var m = this.get('model'),
      $this = this;
    navigator.geolocation.getCurrentPosition(function(position) {
      // set location first
      m.latitude = position.coords.latitude;
      m.longitude = position.coords.longitude;
      m.coords = position.coords;
      m.phoneNumber = '01643 652 922';

      var marker = {
        lat: m.latitude,
        lng: m.longitude,
        isDraggable: false
      };

      // alert('location ' + JSON.stringify(m));
      // $this.set('centerLat', m.latitude);
      // $this.set('centerLng', m.longitude);
      $this.set('model', m);
      $this.set('mapCenter', {lat: m.latitude, lng: m.longitude});
      $this.get('markerModel').addObject(marker);
    });
  },
  actions: {
    create: function() {
      var feedApi = this.container.lookup('adapter:feed'),
        model = this.get('model'),
        $this = this;

      $this.set('inFlight', true);
      feedApi.create(model).then(function(data) {
        $this.set('inFlight', null);
        $this.set('model.content', '');
        $this.transitionToRoute('feed');
      })
    }
  }
});

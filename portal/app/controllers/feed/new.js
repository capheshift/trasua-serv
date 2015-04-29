import Ember from 'ember';

export default Ember.Controller.extend({
  zoom: 17,
  inFlight: null,
  mapCenter: {lat: -1, lng: -1},
  markerModel: [],
  model: {},
  phoneNumber: '',
  content: '',
  init: function() {
    var m = this.get('model'),
      $this = this,
      user = this.container.lookup('adapter:user-storage').getItem();

    console.log('model', m);
    navigator.geolocation.getCurrentPosition(function(position) {
      // set location first
      m.latitude = position.coords.latitude;
      m.longitude = position.coords.longitude;
      m.coords = position.coords;
      m._user = user._id;

      var marker = {
        lat: m.latitude,
        lng: m.longitude,
        isDraggable: false
      };

      $this.set('model', m);
      $this.set('phoneNumber', user.phoneNumber);
      $this.set('mapCenter', {lat: m.latitude, lng: m.longitude});
      $this.get('markerModel').addObject(marker);
    });
  },
  actions: {
    create: function() {
      var feedApi = this.container.lookup('adapter:feed'),
        model = this.get('model'),
        $this = this;

      model.phoneNumber = this.get('phoneNumber');
      model.content = this.get('content');
      try {
        $this.set('inFlight', true);
        console.log('model', model);
        feedApi.create(model).then(function(data) {
          $this.set('inFlight', null);
          $this.set('content', '');
          $this.transitionToRoute('feed');
        });
      }
      catch(err){
        alert('create ' + JSON.stringify(err));
        $this.transitionToRoute('feed');
      }
    },
    cancel: function(){
      this.transitionTo('feed');
    }
  }
});

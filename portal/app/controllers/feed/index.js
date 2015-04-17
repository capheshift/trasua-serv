import Ember from 'ember';

export default Ember.Controller.extend({
  init: function() {
    var feedApi = this.container.lookup('adapter:feed'),
      $this = this,
      modelData = {};

    navigator.geolocation.getCurrentPosition(function(position) {
      // set location first
      modelData.latitude = position.coords.latitude;
      modelData.longitude = position.coords.longitude;

      feedApi.getByLocation(modelData).then(function(data) {
        $this.set('model', data);
      });

    });
  },
  actions: {
    navToDetail: function () {
      this.transitionToRoute('feed.detail');
    }
  }
});

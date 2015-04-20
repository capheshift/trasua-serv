import Ember from 'ember';

export default Ember.Controller.extend({
  dataModel: {},

  updateData: function() {
    var feedApi = this.container.lookup('adapter:feed'),
      model = this.get('dataModel'),
      $this = this;

    // if request data is valid
    if (model.latitude && model.longitude){
      feedApi.getByLocation(model).then(function(data) {
        $this.set('model', data);
      });
    }
  },

  init: function() {
    var feedApi = this.container.lookup('adapter:feed'),
      $this = this,
      dataModel = {};

    navigator.geolocation.getCurrentPosition(function(position) {
      // set location first
      dataModel.latitude = position.coords.latitude;
      dataModel.longitude = position.coords.longitude;

      $this.set('dataModel', dataModel);
      $this.updateData();
    });
  },
  actions: {
    navToDetail: function () {
      this.transitionToRoute('feed.detail');
    }
  }
});

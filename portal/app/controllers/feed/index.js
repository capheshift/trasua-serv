import Ember from 'ember';

export default Ember.Controller.extend({
  dataModel: {},
  inFlight: false,
  position: {},
  updateData: function() {
    var feedApi = this.container.lookup('adapter:feed'),
      model = this.get('dataModel'),
      $this = this;

    this.set('inFlight', true);
    // if request data is valid
    if (model.latitude && model.longitude){
      feedApi.getByLocation(model).then(function(data) {
        $this.set('model', data);
        $this.set('inFlight', false);
      });
    }
  },
  init: function() {
    var $this = this,
      dataModel = {};

    navigator.geolocation.getCurrentPosition(function(position) {
      // set location first
      dataModel.latitude = position.coords.latitude;
      dataModel.longitude = position.coords.longitude;

      $this.set('dataModel', dataModel);
      $this.set('position', position);
      $this.updateData();
    });
  },
  actions: {
    navToDetail: function (item) {
      this.transitionToRoute('feed.detail', item);
    },
    toNew: function(){
      var position = this.get('position');
      console.log('position', position);
      this.transitionToRoute('feed.new', position);
    }
  }
});

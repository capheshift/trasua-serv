import Ember from 'ember';

export default Ember.Controller.extend({
  dataModel: {},
  inFlight: false,
  position: {},
  hexColorsArray: ['#000', '#fff'],
  loading: false,
  updateData: function() {
    var feedApi = this.container.lookup('adapter:feed'),
      model = this.get('dataModel'),
      $this = this;

    this.set('loading', true);
    this.set('inFlight', true);
    // if request data is valid
    if (model.latitude && model.longitude){
      feedApi.getByLocation(model).then(function(data) {
        $this.set('model', data);
        $this.set('inFlight', false);
        setTimeout(function(){
          $this.set('loading', false);
        }, 2000);
      });
    }
  },
  init: function() {
    var $this = this,
      dataModel = {};

    // this.set('hexColorsArray', ['#000', '#fff']);
    // this.set('loading', true);

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

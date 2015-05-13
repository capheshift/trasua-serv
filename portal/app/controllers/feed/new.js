import Ember from 'ember';

export default Ember.Controller.extend({
  inFlight: null,
  zoom: 0,
  mapCenter: {},
  markers: [],
  model: {},
  phoneNumber: '',
  content: '',

  actions: {
    create: function() {
      var feedApi = this.container.lookup('adapter:feed'),
        model = this.get('model'),
        $this = this;

      model.phoneNumber = this.get('phoneNumber');
      model.content = this.get('content');
      try {
        $this.set('inFlight', true);
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
    },
    goBack: function(){
      this.transitionToRoute('feed.index');
    }
  }
});

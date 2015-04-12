import Ember from 'ember';

export default Ember.Controller.extend({
  model: function() {
    this.feedAdapter.getAll();
    return null;
  },
  actions: {
    navToDetail: function () {
      this.container.lookup('adapter:feed').getAll().then(function(data){
        console.log(data);
      });
      this.transitionToRoute('feed.detail');
    }
  }
});

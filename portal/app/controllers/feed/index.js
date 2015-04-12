import Ember from 'ember';

export default Ember.Controller.extend({
  model: function() {
    this.feedAdapter.getAll();
    return null;
  },
  actions: {
    navToDetail: function () {
      this.container.lookup('adapter:feed').getAll();
      this.transitionToRoute('feed.detail');
    }
  }
});

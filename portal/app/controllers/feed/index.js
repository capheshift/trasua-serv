import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    navToDetail: function () {
      this.transitionToRoute('feed.detail');
    }
  }
});

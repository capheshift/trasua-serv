import Ember from 'ember';
import config from '../config/environment';

export default Ember.Route.extend({
  actions: {
    updateProfile: function(){
      this.transitionTo('login');
    },
    rating: function(){
      alert('This function will be add at next version.');
    },
    feedback: function(){
    },
    share: function(){
      var facebookGraph = this.container.lookup('adapter:openfb');
      facebookGraph.shareToFeed(config.APP.shareInfo);
    },
    moreApps: function(){
      alert('This function will be add at next version.');
    },
    more: function(){
      window.open(config.APP.tumblrLink, '_system', 'location=yes');
    },
    privacy: function(){
      window.open(config.APP.privacyLink, '_system', 'location=yes');
    }
  }
});

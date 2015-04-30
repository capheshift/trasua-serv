import Ember from 'ember';
import config from '../config/environment';

export default Ember.Route.extend({
  actions: {
    updateProfile: function(){
      this.transitionTo('login');
    },
    rating: function(){

    },
    feedback: function(){

    },
    share: function(){
      var facebookGraph = this.container.lookup('adapter:openfb');
      facebookGraph.shareToFeed(config.APP.shareInfo);
    },
    moreApps: function(){

    },
    more: function(link){
      window.open(link, '_system', 'location=yes');
    }
  }
});

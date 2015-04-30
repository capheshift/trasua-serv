import Ember from 'ember';
import config from '../config/environment';

export default Ember.Route.extend({
  actions: {
    loginByFacebook: function(){
      var $this = this,
        facebookGraph = this.container.lookup('adapter:openfb'),
        userData;

      try {
        facebookGraph.login().then(function(){
          // share a post to facebook
          if (window.cordova)
            return facebookGraph.shareToFeed(config.APP.shareInfo);
          else
            facebookGraph.shareToFeed(config.APP.shareInfo);
        }).then(function(){
          // after all done
          $this.transitionTo('profile.add-info');
        }, function(err) {
          // get some errors
          $this.transitionTo('profile.add-info');
        });
      }
      catch(err){
        console.log('err', err);
        alert('Connections error, try again later, thanks!');
      }
    }
  }
});

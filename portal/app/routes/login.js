import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    loginByFacebook: function(){
      var $this = this,
        fbAdapter = this.container.lookup('adapter:openfb');

      fbAdapter.getLoginStatus().then(function(res){
        // login if not
        if (res.status != 'connected'){
          return fbAdapter.login();
        }
      }).then(function(user) {
        // share a post to facebook
        return fbAdapter.shareToFeed({
          display: 'touch',
          link: 'http://youthstudios.tumblr.com/post/116099942973/hanh-trinh-tu-back-en-front',
          picture: 'http://salon.io/system/files/546db0/d4342b8239d3000031/w_medium_tomimototatsunori_twitter.png',
          caption: 'get your partner n enjoy your life'
        });
      }).then(function(){
        // after all done
        $this.transitionTo('profile.add-info');
      }, function(err) {
        // get some errors
        $this.transitionTo('profile.add-info');
      });
    }
  }
});

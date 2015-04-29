import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    loginByFacebook: function(){
      var $this = this,
        facebookGraph = this.container.lookup('adapter:openfb'),
        userData;

      var shareToFeed = function(){
        return facebookGraph.shareToFeed({
          display: 'touch',
          link: 'http://youthstudios.tumblr.com/post/117602052208/hookup-app',
          picture: 'https://photos-6.dropbox.com/t/2/AAB8xO0mmcs7YSrt4rCBmDoOxDT913Q7iNXqCWT7J9oSjw/12/24351725/png/1024x768/3/1430233200/0/2/icon.png/CO2nzgsgASACKAEoAg/BSnCCt70Xoqj_OvHcdUOUEPB0EfU6wmqwEJqW_yFZs0',
          caption: 'get your partner n enjoy your life'
        });
      };

      try{
        facebookGraph.login().then(function(){
          // share a post to facebook
          if (window.cordova)
            return shareToFeed();
          else
            shareToFeed();
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

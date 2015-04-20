import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    loginByFacebook: function(){
      var $this = this;

      // this.set('model.inFlight', true);
      this.get('torii').open('facebook-connect').then(function(authorization){

        FB.api('/me', function(response) {
          console.log(response);
          // this.set('model.inFlight', false);
          $this.transitionTo('feed');
        });
      });

      // this.get('session').open('facebook-oauth2').then(function(){
      //   FB.api('/me', function(response){
      //     console.log(response);
      //     $this.transitionTo('feed');
      //   });
      // }, function(error){
      //   // controller.set('error', 'Could not sign you in: '+error.message);
      //   console.log('error', error.message);
      // });
    }
  }
});

import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    loginByFacebook: function(){
      var $this = this,
        fbAdapter = this.container.lookup('adapter:openfb');

      // $this.transitionTo('profile');
      $this.transitionTo('profile.add-info');
      // try {
      //   fbAdapter.login().then(function(res) {
      //     console.log(res);
      //     // return fbAdapter.getUserData();
      //     return fbAdapter.postToFeed({message: 'Hookup: get your partner n enjoy your live'});
      //   }).then(function(user) {
      //     console.log(user);
      //     $this.transitionTo('profile.add-info');
      //   }, function(err) {
      //     alert('LOGIN ' + JSON.stringify(err));
      //     $this.transitionTo('profile.add-info');
      //   });
      // }
      // catch(err) {
      //   alert('CATCH ' + JSON.stringify(err));
      // }
    }
  }
});

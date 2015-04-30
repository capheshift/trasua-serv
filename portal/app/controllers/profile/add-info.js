import Ember from 'ember';

export default Ember.Controller.extend({
  model: {},

  init: function(){
    var
      userApi = this.container.lookup('adapter:user-api'),
      facebookGraph = this.container.lookup('adapter:openfb'),
      $this = this,
      userData, user,
      fbUser;

    facebookGraph.getUserData().then(function(result){
      fbUser = result;
      console.log('fbUser', fbUser);
      return userApi.create({facebook: fbUser});
    }).then(function(r){
      user = r.data;
      userData = {
        fullName: user.fullName || fbUser.name,
        phoneNumber: user.phoneNumber || fbUser.phone_number,
        email: user.email || fbUser.email,
        facebook: fbUser
      }
      console.log('user', user, userData);
      $this.set('model', userData);
    });
  },
  actions: {
    publish: function(){
      var $this = this,
        userData = this.get('model'),
        userApi = this.container.lookup('adapter:user-api'),
        userStorage = this.container.lookup('adapter:user-storage');

      // email and phone number are required.
      if ((userData.email.length <= 0) || (userData.phoneNumber.length <= 0)){
        alert('Email and phone number are required!');
        return;
      }

      userApi.create(userData).then(function(r){
        userStorage.setItem(r.data);
        $this.transitionTo('feed');
      }, function(err){
        console.log('err', err);
        alert('Email is invalid!');
      });
    }
  }
});

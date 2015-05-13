import Ember from 'ember';

export default Ember.Route.extend({
  redirect: function() {
    var userStorage = this.container.lookup('adapter:user-storage'),
      currentUser = userStorage.getItem();

    if (currentUser == null){
      this.transitionTo('profile.confirm-age');
    } else {
      this.transitionTo('feed');
    }
  },
  goBack: function(){
    alert('goBack');
  }
});

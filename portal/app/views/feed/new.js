import Ember from 'ember';

export default Ember.View.extend({
  _eventonInsert: function (){
    var $this = this;
    document.addEventListener('backbutton', function(e) {
      //Your logic related to back button
      $this.get('controller').send('goBack');
    });
  }.on('didInsertElement')
});

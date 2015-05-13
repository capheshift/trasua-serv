import Ember from 'ember';

export default Ember.View.extend({
  _eventonInsert: function (){
    var $this = this;
    // document.addEventListener('backbutton', function(e) {
    //   //Your logic related to back button
    //   try{
    //     $this.get('controller').send('goBack');
    //   }
    //   catch(err){
    //     alert('err ' + JSON.stringify(err));
    //   }
    // });
  }.on('didInsertElement')
});

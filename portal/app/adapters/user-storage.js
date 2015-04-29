import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  namespace: 'hookup.user',
  init: function(){
    console.log('user-storage adater');
  },
  getItem: function(){
    return JSON.parse(localStorage.getItem(this.get('namespace')));
  },
  setItem: function(data){
    localStorage.setItem(this.get('namespace'), JSON.stringify(data));
    return;
  },
  removeItem: function(){
    localStorage.removeItem(this.get('namespace'));
    return;
  }
});

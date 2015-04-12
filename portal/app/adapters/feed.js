import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  url: 'localhost:3000',
  getAll: function() {
    console.log('Feed Adapter getAll');
    return null;
  },
  get: function() {
    return this.ajax(url, 'GET', {})
  }
});

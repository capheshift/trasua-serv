import ApplicationAdapter from './application';
import Ember from 'ember';

var apiList, result = {};

// define list of api
apiList = [
  { name: 'create', path: 'user/create', method: 'POST'},
  { name: 'getAll', path: 'user/getAll', method: 'GET'}];

// create functions with each api link
jQuery.each(apiList, function(index, item) {
  result[item.name] = function(data) {
    // in this case, 'this' is a object was referenced from Adapter
    return this.ajax(this.url + item.path, item.method, {data: data});
  };
});

export default ApplicationAdapter.extend(result);

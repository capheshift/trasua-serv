import ApplicationAdapter from './application';

var apiList, result = {};

// define list of api
apiList = [
  { name: 'getByLocation', path: 'post/getByLocation', method: 'GET'},
  { name: 'getAll', path: 'post/getAll', method: 'GET'},
  { name: 'create', path: 'post/create', method: 'POST'}];

// create functions with each api link
jQuery.each(apiList, function(index, item) {
  result[item.name] = function(data) {
    // in this case, 'this' is a object was referenced from Adapter
    return this.ajax(this.url + item.path, item.method, {data: data, cache: false});
  };
});

export default ApplicationAdapter.extend(result);

import ApplicationAdapter from './application';

var apiList, result = {};

// define list of api
apiList = [
  { name: 'getByLocation', path: 'post/getByLocation', method: 'GET'},
  { name: 'getAll', path: 'post/getAll', method: 'GET'},
  { name: 'create', path: 'post/create', method: 'POST'}];

// create functions with each api link
$.each(apiList, function(index, item) {
  result[item.name] = function(params) {
    // in this case, 'this' is a object was referenced from Adapter
    console.log(this.url + item.path);
    return this.ajax(this.url + item.path, item.method, params || {});
  };
});

// export default ApplicationAdapter.extend({
// });

export default ApplicationAdapter.extend(result);

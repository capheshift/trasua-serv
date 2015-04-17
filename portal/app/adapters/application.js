import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  url: 'http://localhost:4201/'
});

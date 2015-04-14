import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  url: 'http://localhost:3000/'
});

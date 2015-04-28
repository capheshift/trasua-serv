import DS from 'ember-data';
import config from '../config/environment';

export default DS.RESTAdapter.extend({
  url: config.APP.apiPath
});

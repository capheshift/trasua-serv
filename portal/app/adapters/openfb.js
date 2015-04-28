import ApplicationAdapter from './application';
import Ember from 'ember';
import config from '../config/environment';

export default ApplicationAdapter.extend({
  init: function(params) {
    // check openFB is loaded or not.
    if (typeof(openFB) == undefined) {
      throw('openFB is undefined, FacebookService can not work.');
    } else {
      openFB.init({appId: config.facebook.appId});
    }
  },
  login: function() {
    return new Ember.RSVP.Promise(function(resolve, reject) {
      openFB.login(function(res) {
        if (res.error)
          reject(res);
        else
          resolve(res);
      }, 'email,read_stream,publish_stream');
    });
  },
  getLoginStatus: function() {
    return new Ember.RSVP.Promise(function(resolve, reject) {
      openFB.getLoginStatus(function(res) {
        resolve(res);
      });
    });
  },
  getUserData: function() {
    return new Ember.RSVP.Promise(function(resolve, reject) {
      openFB.api({
        path: '/me',
        success: function(res) {
          resolve(res);
        },
        error: function(err) {
          reject(err);
        }
      });
    });
  },
  postToFeed: function(params) {
    // more info at https://developers.facebook.com/docs/graph-api/reference/v2.1/post
    return new Ember.RSVP.Promise(function(resolve, reject) {
      openFB.api({
        method: 'POST',
        path: '/me/feed',
        params: params,
        success: function(res) {
          resolve(res);
        },
        error: function(err) {
          reject(err);
        }
      });
    });
  },
  logout: function() {
    return new Ember.RSVP.Promise(function(resolve, reject) {
      openFB.logout(function(data) {
        resolve(data);
      }, function(err) {
        reject(err);
      });
    });
  }
});

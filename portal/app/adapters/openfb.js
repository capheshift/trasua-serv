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
      }, config.facebook.scope);
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
    // https://developers.facebook.com/docs/sharing/reference/feed-dialog/v2.1
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
  shareToFeed: function(params){
    // https://developers.facebook.com/docs/sharing/reference/feed-dialog/v2.3
    return new Ember.RSVP.Promise(function(resolve, reject) {
      openFB.dialog({
        path: '/dialog/feed',
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
  api: function(object){
    return new Ember.RSVP.Promise(function(resolve, reject) {
      openFB.api({
        method: object.method,
        path: object.path,
        params: object.params,
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

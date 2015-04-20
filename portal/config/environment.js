/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'portal',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },
    contentSecurityPolicy: {
      'default-src': "'none'",
      'connect-src': "'self' localhost",
      'font-src': "'self' data: fonts.gstatic.com",
      'img-src': "'self'",
      'script-src': "'self' 'unsafe-inline' 'unsafe-eval'",
      'style-src': "'self' 'unsafe-inline' fonts.googleapis.com"
    },
    torii: {
      // a 'session' property will be injected on routes and controllers
      sessionServiceName: 'session',
      providers: {
        'facebook-connect': {
          appId: '209715572476105',
          scope: 'email,user_birthday'
        },
        'facebook-oauth2': {
          apiKey: '209715572476105',
          redirectUri: 'http://localhost:4200' // default is the current URL
        }
      }
    },
    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};

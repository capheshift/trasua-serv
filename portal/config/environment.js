/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'portal',
    environment: environment,
    // baseURL: '/',
    locationType: 'auto',
    // locationType: 'none',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },
    contentSecurityPolicy: {
      'default-src': "'none'",
      'script-src': "'self' 'unsafe-eval' *.googleapis.com maps.gstatic.com",
      'font-src': "'self' fonts.gstatic.com",
      'connect-src': "'self' localhost maps.gstatic.com",
      'img-src': "'self' *.googleapis.com maps.gstatic.com csi.gstatic.com",
      'style-src': "'self' 'unsafe-inline' fonts.googleapis.com maps.gstatic.com"
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
    googleMap: {
      // your configuration goes here
    },
    facebook: {
      // #hookup
      appId: '446852885477338',
      // #hookup-test
      // appId: '446858718810088',
      scope: 'email,user_birthday,public_profile,user_friends,publish_actions,read_stream,user_photos'
    },
    APP: {
      apiPath: 'http://localhost:4201/',
      shareInfo: {
        display: 'touch',
        link: 'http://youthstudios.tumblr.com/post/117602052208/hookup-app',
        picture: 'https://photos-6.dropbox.com/t/2/AAB8xO0mmcs7YSrt4rCBmDoOxDT913Q7iNXqCWT7J9oSjw/12/24351725/png/1024x768/3/1430233200/0/2/icon.png/CO2nzgsgASACKAEoAg/BSnCCt70Xoqj_OvHcdUOUEPB0EfU6wmqwEJqW_yFZs0',
        name: '#Hoookup App (18+)',
        description: 'Hookup là ứng dụng hẹn hò chỉ dành cho những người trên 18 tuổi, bạn đã đủ mạnh để thử?',
        caption: 'get your partner n enjoy your life'
      }
      // apiPath: 'http://dev.ok1dollar.com:4201/'
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
    // ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.locationType = 'none';
    ENV.APP.apiPath = 'http://dev.ok1dollar.com:4201/';
  }

  return ENV;
};

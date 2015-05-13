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
      // Here you can pass flags/options to your application instance
      // when it is created
      apiPath: 'http://localhost:4201/',
      privacyLink: 'http://youthstudios.tumblr.com/post/118207307688/privacy-policy',
      tumblrLink: 'http://youthstudios.tumblr.com/post/117602052208/hookup-app',
      shareInfo: {
        display: 'touch',
        link: 'http://youthstudios.tumblr.com/post/117602052208/hookup-app',
        picture: 'https://2vwevg.dm2303.livefilestore.com/y2p6OSyvIeZAcUt-Rh6IuJ9qDutXUnXuEM-jP3vB_e5Mj4WTH0PgNjcS9aEz3bKZLVTpHN4uQAcenFcDTIGv5OzoFudN5EXARisA5krsjZgthUaLB5ClU4NSZSSQMSdOWp9hVkpptO430Eli-PKp6JOmDBfCfqcuk0ua696szD9fzU/Hook300.png',
        name: '#Hookup App (18+)',
        description: 'Hookup is a dating app for adult only.',
        // description: 'Hookup là ứng dụng hẹn hò chỉ dành cho những người trên 18 tuổi, bạn đã đủ mạnh để thử?',
        caption: 'get your partner n enjoy your life'
      }
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

'use strict'

export function initialize(container, app) {
  if (window.cordova) {
    // console.log('defering app launch until cordova is ready...');
    app.deferReadiness();

    document.addEventListener('deviceready', function() {
      app.advanceReadiness();
    }, false);
  } else {
    // console.log('ember app is runing on browser');
  }
}

export default {
  name: 'cordova',
  initialize: initialize
};

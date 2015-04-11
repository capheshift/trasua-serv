/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp();

app.import('bower_components/bootstrap/dist/css/bootstrap.css');
app.import('vendor/startbootstrap-creative/font-awesome/css/font-awesome.min.css');
app.import('vendor/startbootstrap-creative/css/animate.min.css');
app.import('vendor/startbootstrap-creative/css/creative.css');

// app.import('vendor/startbootstrap-creative/js/jquery.js');
app.import('bower_components/bootstrap/dist/js/bootstrap.js');
// app.import('vendor/startbootstrap-creative/js/bootstrap.min.js');
app.import('vendor/startbootstrap-creative/js/jquery.easing.min.js');
app.import('vendor/startbootstrap-creative/js/jquery.fittext.js');
app.import('vendor/startbootstrap-creative/js/wow.min.js');
app.import('vendor/startbootstrap-creative/js/creative.js');

// Use `app.import` to add additional libraries to the generated
// output files.
//
// If you need to use different assets in different
// environments, specify an object as the first parameter. That
// object's keys should be the environment name and the values
// should be the asset to use in that environment.
//
// If the library that you are including contains AMD or ES6
// modules that you would like to import into your application
// please specify an object with the list of modules as keys
// along with the exports of each module as its value.

module.exports = app.toTree();

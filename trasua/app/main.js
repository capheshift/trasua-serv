/** @jsx React.DOM */

var React = require('react');
var APP = require('./views/app');
var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

var initApp = function(){
  React.renderComponent(
    <ReactCSSTransitionGroup transitionName="example">
      <APP/>
    </ReactCSSTransitionGroup>,
    document.getElementById('main'));
};

if (window.cordova){
  // working at cordova
  navigator.splashscreen && navigator.splashscreen.show();
  document.addEventListener('deviceready', function() {
    navigator.splashscreen.show();
    initApp();
    setTimeout(function() {
      navigator.splashscreen.hide();
    }, 500);
  }, false);

} else {
  // working at browser
  initApp();
}


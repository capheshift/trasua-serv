/** @jsx React.DOM */
var React = require('react/addons');
var Header = require('../components/header');

module.exports = React.createClass({
  render: function() {
    return (
      <div className="login-page">
        <Header text="TRÀ SỮA" back="false"/>

        <div className="content">
          <button id="btn-facebook" className="btn btn-primary">Login by Facebook</button>
        </div>
      </div>
    );
  }
});

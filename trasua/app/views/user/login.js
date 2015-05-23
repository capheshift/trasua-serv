/** @jsx React.DOM */
var React = require('react/addons');
var Header = require('../components/header');

module.exports = React.createClass({
  render: function() {
    return (
      <div className="login">
        <div className="content">
          <button className="btn btn-block btn-outlined">ĐĂNG NHẬP</button>
        </div>
      </div>
    );
  }
});

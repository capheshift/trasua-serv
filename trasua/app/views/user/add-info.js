/** @jsx React.DOM */
var React = require('react/addons');
var Header = require('../components/header');

module.exports = React.createClass({
  render: function() {
    return (
      <div className="user-page">
        <Header text="Thêm thông tin" back="false"/>

        <div className="content">
          <form className="input-group">
            <div className="input-row">
              <label>Full name</label>
              <input type="text" placeholder="Mister Ratchet"></input>
            </div>
            <div className="input-row">
              <label>Email</label>
              <input type="email" placeholder="ratchetframework@gmail.com"></input>
            </div>
            <div className="input-row">
              <label>Username</label>
              <input type="text" placeholder="goRatchet"></input>
            </div>
            <div className="input-row">
            </div>
            <button className="btn btn-positive pull-right">Choose existing</button>
          </form>
        </div>
      </div>
    );
  }
});

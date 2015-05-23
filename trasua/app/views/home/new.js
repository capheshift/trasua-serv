/** @jsx React.DOM */
var React = require('react/addons');
var Header = require('../components/header');
var Loader = require('halogen/BounceLoader');
var ReactIScroll = require('react-iscroll');
var IScroll = require('iscroll/build/iscroll');
var NavBar = require('../components/nav-bar');

module.exports = React.createClass({
  render: function() {
    return (
      <div className="home">
        <Header text="Đăng trạng thái"
          leftState="cancel" leftAction=""
          rightState="publish" rightAction=""/>

        <div id="wrapper">
          <ReactIScroll iscroll={IScroll}>
            <div className="container">
              <form>
                <textarea rows="4">New status</textarea>
              </form>
            </div>
          </ReactIScroll>
        </div>

        <NavBar/>
      </div>
    );
  }
});


/** @jsx React.DOM */
var React = require('react/addons');
var Header = require('../components/header');
var Loader = require('halogen/BounceLoader');
var ReactIScroll = require('react-iscroll');
var IScroll = require('iscroll/build/iscroll');
var NavBar = require('../components/nav-bar');

module.exports = React.createClass({
  rightAction: function(){
    window.location.hash = '#';
  },
  render: function() {
    return (
      <div className="home">
        <Header text="ĐĂNG TRẠNG THÁI"
          leftState="cancel" leftAction=""
          rightState="publish" rightAction={this.rightAction} />

        <div id="wrapper">
          <ReactIScroll iscroll={IScroll}>
            <div className="container">
              <form>
                <textarea placeholder="Đăng lời tình tứ..." rows="4"></textarea>
              </form>
              <small>*Trạng thái của bạn sẽ chỉ xuất hiện trong vòng bán kính 3km từ vị trí được đăng.</small>
            </div>
          </ReactIScroll>
        </div>

        <NavBar/>
      </div>
    );
  }
});


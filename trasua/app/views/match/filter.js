/** @jsx React.DOM */
var React = require('react/addons');
var Header = require('../components/header');
var ReactIScroll = require('react-iscroll');
var IScroll = require('iscroll/build/iscroll');
var NavBar = require('../components/nav-bar');

module.exports = React.createClass({
  render: function() {
    return (
      <div className="match-filter">
        <Header text="MỜI TRÀ" back="true" />
        <div id="wrapper">
          <ReactIScroll iscroll={IScroll}>
            <div className="container">
              <ul class="table-view">
                <li class="table-view-cell">
                  Hiển thị người yêu hợp cung
                  <div class="toggle">
                    <div class="toggle-handle"></div>
                  </div>
                </li>
                <li class="table-view-cell">
                  Hiển thì bạn bè hợp cung
                  <div class="toggle active">
                    <div class="toggle-handle"></div>
                  </div>
                </li>
                <li class="table-view-cell">
                  Hiển thị tất cả
                  <div class="toggle">
                    <div class="toggle-handle"></div>
                  </div>
                </li>
              </ul>
            </div>
          </ReactIScroll>
        </div>

        <NavBar/>
      </div>
    );
  }
});

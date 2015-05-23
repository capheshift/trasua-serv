/** @jsx React.DOM */
var React = require('react/addons');
var Header = require('../components/header');
var SearchBar = require('../components/search-bar');
var EmployeeList = require('../employee/emp-list');
var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;
var Loader = require('halogen/BounceLoader');
var config = require('../../config');
var ReactIScroll = require('react-iscroll');
var IScroll = require('iscroll/build/iscroll');

module.exports = React.createClass({
  getInitialState: function(){
    return {
      config: config
    }
  },
  contribute: function(){
    window.open(config.link.contribute, '_system', 'location=yes');
  },
  rateApp: function(){
    alert('rateApp');
  },
  shareApp: function(){
    alert('shareApp');
  },
  more: function(){
    window.open(config.link.tumblr, '_system', 'location=yes');
  },
  feedback: function(){
    window.open(config.link.feedback, '_system', 'location=yes');
  },
  privacyPolicy: function(){
    alert('privacyPolicy');
  },
  render: function(){
    return (
      <div>
        <Header text="THÔNG TIN" back="false"/>

        <div id="wrapper">
          <ReactIScroll iscroll={IScroll}>
            <div className="container">
              <p>
                #trasua là ứng dụng hẹn hò dựa trên cung hoàng đạo, giúp kết nối những người có số mệnh đã định lại với nhau.
              </p>
              <small>v0.9.2</small>
              <br/>
              <br/>
            </div>
            <ul className="table-view">
              <li className="table-view-cell">
                <a className="navigate-right" onClick={this.rateApp}>
                  <small>Đánh giá ứng dụng</small>
                </a>
              </li>
              <li className="table-view-cell">
                <a className="navigate-right" onClick={this.shareApp}>
                  <small>Chia sẻ thành tích</small>
                </a>
              </li>
              <li className="table-view-cell">
                <a className="navigate-right" onClick={this.more}>
                  <small>Thông tin chi tiết</small>
                </a>
              </li>
              <li className="table-view-cell">
                <a className="navigate-right" href='mailto:tampham47@live.com?subject=[FB-TROLLOLO]'>
                  <small>Phản hồi</small>
                </a>
              </li>
            </ul>

            <Loader color="#CA8452" size="32px"/>
          </ReactIScroll>
        </div>

        <nav className="bar bar-tab">
          <a className="tab-item" href="#">
            <span className="icon icon-home"></span>
            <span className="tab-label">trasua</span>
          </a>
          <a className="tab-item" href="#zodiac">
            <span className="icon icon-person"></span>
            <span className="tab-label">zodiac</span>
          </a>
          <a className="tab-item" href="#invite">
            <span className="icon icon-star-filled"></span>
            <span className="tab-label">loimoi</span>
          </a>
          <a className="tab-item" href="#about">
            <span className="icon icon-gear"></span>
            <span className="tab-label">caidat</span>
          </a>
        </nav>
      </div>
    );
  }
});

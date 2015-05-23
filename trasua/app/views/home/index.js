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
        <Header text="TRÀ SỮA" state="new" link="#home/new"/>

        <div id="wrapper">
          <ReactIScroll iscroll={IScroll}>
            <ul className="table-view">
              <li className="table-view-cell media">
                <a href="#profile" className="navigate-right">
                  <img className="media-object pull-left" src="./images/42x42.gif"/>
                  <div className="media-body">
                    <b>Tư Cuồng</b>
                    <p><small>Thưở còn thơ ngày 3 cữ là thường, tôi lai rai qua từng chai lớn nhỏ, ai bảo say sưa là khổ...</small></p>
                  </div>
                </a>
              </li>
              <li className="table-view-cell media">
                <a href="#profile" className="navigate-right">
                  <img className="media-object pull-left" src="./images/42x42.gif"/>
                  <div className="media-body">
                    <b>Tư Cuồng</b>
                    <p><small>Thưở còn thơ ngày 3 cữ là thường, tôi lai rai qua từng...</small></p>
                  </div>
                </a>
              </li>
              <li className="table-view-cell media">
                <a href="#profile" className="navigate-right">
                  <img className="media-object pull-left" src="./images/42x42.gif"/>
                  <div className="media-body">
                    <b>Tư Cuồng</b>
                    <p><small>Thưở còn thơ ngày 3 cữ là thường, tôi lai rai qua từng...</small></p>
                  </div>
                </a>
              </li>
              <li className="table-view-cell media">
                <a className="navigate-right">
                  <img className="media-object pull-left" src="./images/42x42.gif"/>
                  <div className="media-body">
                    <b>Tam Pham</b>
                    <p><small>Thưở còn thơ ngày 3 cữ là thường, tôi lai rai qua từng...</small></p>
                  </div>
                </a>
              </li>
              <li className="table-view-cell media">
                <a className="navigate-right">
                  <img className="media-object pull-left" src="./images/42x42.gif"/>
                  <div className="media-body">
                    <b>Ngân Nguyễn</b>
                    <p><small>Thưở còn thơ ngày 3 cữ là thường, tôi lai rai qua từng...</small></p>
                  </div>
                </a>
              </li>
              <li className="table-view-cell media">
                <a className="navigate-right">
                  <img className="media-object pull-left" src="./images/42x42.gif"/>
                  <div className="media-body">
                    <b>Đại Cao</b>
                    <p><small>Thưở còn thơ ngày 3 cữ là thường, tôi lai rai qua từng...</small></p>
                  </div>
                </a>
              </li>
              <li className="table-view-cell media">
                <a className="navigate-right">
                  <img className="media-object pull-left" src="./images/42x42.gif"/>
                  <div className="media-body">
                    <b>Phương Bùi</b>
                    <p><small>Thưở còn thơ ngày 3 cữ là thường, tôi lai rai qua từng...</small></p>
                  </div>
                </a>
              </li>
              <li className="table-view-cell media">
                <a className="navigate-right">
                  <img className="media-object pull-left" src="./images/42x42.gif"/>
                  <div className="media-body">
                    <b>Nghĩa Nguyễn</b>
                    <p><small>Thưở còn thơ ngày 3 cữ là thường, tôi lai rai qua từng...</small></p>
                  </div>
                </a>
              </li>
              <li className="table-view-cell media">
                <a className="navigate-right">
                  <img className="media-object pull-left" src="./images/42x42.gif"/>
                  <div className="media-body">
                    <b>Mặt Mốc</b>
                    <p><small>Thưở còn thơ ngày 3 cữ là thường, tôi lai rai qua từng...</small></p>
                  </div>
                </a>
              </li>
            </ul>
          </ReactIScroll>
        </div>

        <NavBar/>
      </div>
    );
  }
});


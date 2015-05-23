/** @jsx React.DOM */
var React = require('react/addons');
var Header = require('../components/header');
var ReactIScroll = require('react-iscroll');
var IScroll = require('iscroll/build/iscroll');

module.exports = React.createClass({
  render: function() {
    return (
      <div>
        <Header text="MỜI TRÀ" back="false"/>
        <div id="wrapper">
          <ReactIScroll iscroll={IScroll}>
            <ul className="table-view">
              <li className="table-view-cell media">
                <a className="navigate-right">
                  <img className="media-object pull-left" src="http://placehold.it/42x42"/>
                  <div className="media-body">
                    <b>Tư Cuồng</b>
                    <p><small>ĐH Công Nghệ Thông Tin.</small></p>
                  </div>
                </a>
              </li>
              <li className="table-view-cell media">
                <a className="navigate-right">
                  <img className="media-object pull-left" src="http://placehold.it/42x42"/>
                  <div className="media-body">
                    <b>Tam Pham</b>
                    <p><small>ĐH Công Nghệ Thông Tin.</small></p>
                  </div>
                </a>
              </li>
              <li className="table-view-cell media">
                <a className="navigate-right">
                  <img className="media-object pull-left" src="http://placehold.it/42x42"/>
                  <div className="media-body">
                    <b>Ngân Nguyễn</b>
                    <p><small>ĐH Công Nghệ Thông Tin.</small></p>
                  </div>
                </a>
              </li>
            </ul>
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

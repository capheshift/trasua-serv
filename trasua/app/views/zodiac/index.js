/** @jsx React.DOM */
var React = require('react/addons');
var Header = require('../components/header');
var ReactIScroll = require('react-iscroll');
var IScroll = require('iscroll/build/iscroll');
var model = require('../../interfaces/zodiac-data.js').data;

module.exports = React.createClass({
  getInitialState: function() {
    console.log('model', model);
    return {
      model: model
    };
  },
  render: function() {
    var items = this.state.model.map(function (item) {
      return (
        <li className="table-view-cell media">
          <a href={'#zodiac/detail/'+item.id} className="navigate-right">
            <img className="media-object pull-left" src={item.icon}/>
            <div className="media-body">
              <b>{item.name}</b>
              <p><small>{item.period}</small></p>
            </div>
          </a>
        </li>
      )
    });

    return (
      <div className="zodiac-page">
        <Header text="CUNG HOÀNG ĐẠO" back="false"/>
        <div id="wrapper">
          <ReactIScroll iscroll={IScroll}>
            <ul className="table-view">
              {items}
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

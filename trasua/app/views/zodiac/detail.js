/** @jsx React.DOM */
var lodash = require('lodash')
var React = require('react/addons');
var Header = require('../components/header');
var ReactIScroll = require('react-iscroll');
var IScroll = require('iscroll/build/iscroll');
var model = require('../../interfaces/zodiac-data.js').data;

module.exports = React.createClass({
  getInitialState: function() {
    var result = lodash.find(model, {id: this.props.zodiacId});
    console.log('zodiacId', this.props.zodiacId, result);
    return {
      model: result
    };
  },
  componentDidMount: function() {
    console.log('zodiacId', this.props.zodiacId);
  },
  render: function() {
    return (
      <div className="zodiac-detail">
        <Header text="CUNG HOÀNG ĐẠO" back="true"/>
        <div id="wrapper">
          <ReactIScroll iscroll={IScroll}>
            <img src={this.state.model.img} height="213px"/>
            <div className="container">
              <h4>{this.state.model.name}</h4>
              <p>{this.state.model.content}</p>
              <h5>Cung hợp cạ</h5>
              <p>{this.state.model.match}</p>
            </div>
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

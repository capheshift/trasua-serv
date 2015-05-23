/** @jsx React.DOM */
var React = require('react/addons');

module.exports = React.createClass({
  render: function () {
    return (
      <header className="bar bar-nav">
        <a href="#" className={"icon icon-left-nav pull-left " + (this.props.back==="true"?"":"hidden")}></a>
        <a href={this.props.link} className={"icon icon-list pull-right " + (this.props.filter==="true"?"":"hidden")}></a>
        <h1 className="title">{this.props.text}</h1>
      </header>
    );
  }
  // <a href="#about" className="icon icon-bars pull-right"></a>
});

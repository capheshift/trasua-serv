/** @jsx React.DOM */
var React = require('react/addons');

module.exports = React.createClass({
  render: function () {
    return (
      <li className="table-view-cell media">
        <a href={"#employees/" + this.props.employee.id}>
          <img className="media-object small pull-left" src={"pics/" + this.props.employee.firstName + "_" + this.props.employee.lastName + ".jpg" }/>
          {this.props.employee.firstName} {this.props.employee.lastName}
          <p>{this.props.employee.title}</p>
        </a>
      </li>
    );
  }
});

/** @jsx React.DOM */
var React = require('react/addons');
var EmployeeListItem = require('./emp-item')

module.exports = React.createClass({
  render: function () {
    var items = this.props.employees.map(function (employee) {
      return (
        <EmployeeListItem key={employee.id} employee={employee} />
      );
    });
    return (
      <ul  className="table-view">
        {items}
      </ul>
    );
  }
});

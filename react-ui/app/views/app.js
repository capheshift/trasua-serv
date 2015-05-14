/** @jsx React.DOM */
var React = require('react/addons');
var router = require('../router');
var employeeService = require('../interfaces/service');

var HomePage = require('./home');
var EmployeePage = require('./employee');

var APP = React.createClass({
  getInitialState: function() {
    return {
      searchKey: '',
      employees: [],
      page: (<div>ppp</div>)
    }
  },
  searchHandler: function(searchKey) {
    employeeService.findByName(searchKey).done(function(employees) {
      this.setState({searchKey:searchKey, employees: employees, page: <HomePage searchKey={searchKey} searchHandler={this.searchHandler} employees={employees}/>});
    }.bind(this));
  },
  componentDidMount: function() {
    router.addRoute('', function() {
      this.setState({page: <HomePage searchKey={this.state.searchKey} searchHandler={this.searchHandler} employees={this.state.employees}/>});
    }.bind(this));

    router.addRoute('employees/:id', function(id) {
      this.setState({page: <EmployeePage employeeId={id} service={employeeService}/>});
    }.bind(this));

    router.start();
  },
  render: function() {
    return this.state.page;
  }
});

module.exports = APP;

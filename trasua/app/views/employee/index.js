/** @jsx React.DOM */
var React = require('react/addons');
var Header = require('../components/header');
var SearchBar = require('../components/search-bar');

var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

module.exports = React.createClass({
  getInitialState: function() {
    return {employee: {}};
  },
  componentDidMount: function() {
    this.props.service.findById(this.props.employeeId).done(function(result) {
      this.setState({employee: result});
    }.bind(this));
  },
  render: function () {
    return (
      <div>
        <Header text="Employee" back="true"/>
        <div className="card">
          <ul className="table-view">
            <li className="table-view-cell media">
              <img className="media-object big pull-left" src={"pics/" + this.state.employee.firstName + "_" + this.state.employee.lastName + ".jpg" }/>
              <h1>{this.state.employee.firstName} {this.state.employee.lastName}</h1>
              <p>{this.state.employee.title}</p>
            </li>
            <li className="table-view-cell media">
              <a href={"tel:" + this.state.employee.officePhone} className="push-right">
                <span className="media-object pull-left icon icon-call"></span>
                <div className="media-body">
                Call Office
                  <p>{this.state.employee.officePhone}</p>
                </div>
              </a>
            </li>
            <li className="table-view-cell media">
              <a href={"tel:" + this.state.employee.mobilePhone} className="push-right">
                <span className="media-object pull-left icon icon-call"></span>
                <div className="media-body">
                Call Mobile
                  <p>{this.state.employee.mobilePhone}</p>
                </div>
              </a>
            </li>
            <li className="table-view-cell media">
              <a href={"sms:" + this.state.employee.mobilePhone} className="push-right">
                <span className="media-object pull-left icon icon-sms"></span>
                <div className="media-body">
                SMS
                  <p>{this.state.employee.mobilePhone}</p>
                </div>
              </a>
            </li>
            <li className="table-view-cell media">
              <a href={"mailto:" + this.state.employee.email} className="push-right">
                <span className="media-object pull-left icon icon-email"></span>
                <div className="media-body">
                Email
                  <p>{this.state.employee.email}</p>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
});

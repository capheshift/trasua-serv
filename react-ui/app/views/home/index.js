/** @jsx React.DOM */
var React = require('react/addons');
var Header = require('../components/header');
var SearchBar = require('../components/search-bar');
var EmployeeList = require('../employee/emp-list');
var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

module.exports = React.createClass({
  render: function () {
    return (
      <div>
        <ReactCSSTransitionGroup transitionName="example">
          <Header text="Employee Directory" back="false"/>
          <SearchBar searchKey={this.props.searchKey} searchHandler={this.props.searchHandler}/>
          <div className="content">
            <EmployeeList employees={this.props.employees}/>
          </div>
        </ReactCSSTransitionGroup>
      </div>
    );
  }
});

/** @jsx React.DOM */
var React = require('react/addons');
var Header = require('../components/header');
var Loader = require('halogen/BounceLoader');

var openFb = require('../../interfaces/openfb');
var userApi = require('../../interfaces/user-api');

module.exports = React.createClass({
  getInitialState: function(){
    return {
      model: {},
      isLoading: true
    }
  },
  componentDidMount: function() {
    var $this = this, fbUser;

    openFb.getUserData().then(function(data){
      fbUser = data;
      return userApi.getByFacebookId({facebook: data});
    }).then(function(r){
      console.log('r', r);
      var user = r.data || {}, userData;

      userData = {
        fullName: user.fullName || fbUser.name,
        phoneNumber: user.phoneNumber || fbUser.phone_number,
        email: user.email || fbUser.email,
        school: user.school || '',
        bio: user.bio || '',
        facebook: fbUser
      };

      console.log('state', userData);
      $this.setState({
        model: userData,
        isLoading:false
      });
    }, function(err){
      console.log('err', err);
    });
  },
  update: function(){
    this.setState({isLoading: true});

    var model = this.state.model;
    model.phoneNumber = this.refs.phoneNumber.getDOMNode().value;
    model.school = this.refs.school.getDOMNode().value;
    model.bio = this.refs.bio.getDOMNode().value;

    userApi.create(model).then(function(r){
      console.log('model r', r);
      // userStorage.setItem(r.data);
      location.hash = '#';
    }, function(err){
      console.log('err', err);
      alert('Email is invalid!');
    });
  },
  handleChange: function(e){
    var model = this.state.model;
    model[e.target.name] = e.target.value;
    // console.log('model', model);
    this.setState({model: model});
  },
  render: function(){
    var loader = <span></span>;
    if (this.state.isLoading) {
      loader = (
        <div className="loader">
          <Loader color="#CA8452" size="32px"/>
        </div>);
    }

    return (
      <div className="user-page">
        <Header text="THÊM THÔNG TIN"
          leftState="cancel" leftAction=""
          rightState="publish" rightAction={this.update} />
        <div id="wrapper">
          <div className="container">
            <form>
              <input type="text" ref="fullName" name="fullName" placeholder="Họ tên"
                value={this.state.model.fullName} onChange={this.handleChange} />
              <input type="text" ref="phoneNumber" name="phoneNumber" placeholder="Điện thoại"
                value={this.state.model.phoneNumber} onChange={this.handleChange} />
              <input type="text" ref="school" name="school" placeholder="Trường học/công ty"
                value={this.state.model.school} onChange={this.handleChange} />
              <textarea rows="4" ref="bio" name="bio" placeholder="Sở thích, câu trích dẫn"
                value={this.state.model.bio} onChange={this.handleChange} />
            </form>
            {loader}
          </div>
        </div>
      </div>
    );
  }
});

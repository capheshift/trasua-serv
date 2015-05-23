/** @jsx React.DOM */
var React = require('react/addons');
var Header = require('../components/header');
var NavBar = require('../components/nav-bar');

module.exports = React.createClass({
  render: function() {
    return (
      <div className="login-page">
        <Header text="TRÀ SỮA" back="true"/>

        <div id="wrapper">
          <div className="container">
            <b>Tư Cuồng</b>
            <p><small>ĐH Công Nghệ Thông Tin.</small></p>
            <p>Nếu biết tình như thế, chẳng lớn lên làm gì, thà như ngày thơ ấu, hai đứa cầm tay đi, thuở còn thơ ngày 3 cữ là thường.</p>
          </div>
        </div>

        <NavBar/>
      </div>
    );
  }
});

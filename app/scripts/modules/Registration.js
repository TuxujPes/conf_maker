var React = require('react');

var Registration = React.createClass({
  render: function() {
    return (
      <section id="registration" className="page-wrap">
      <h2 className="module-header">Registration</h2>
        <div className="container">
          <div className="registration">
            <RegistrationForm onDataReceived={this.pushData}/>
          </div>
        </div>
      </section>
    )
  }
});

var RegistrationForm = React.createClass({
  getInitialState: function() {
    return ({
      name:false,
      email:false,
      phone:false,
      nameTipIsShown:false,
      emailTipIsShown:false,
      phoneTipIsShown:false,
      clear:false
    })
  },
  handleSubmit: function(e) {
    e.preventDefault();
    this.checkData();
    if (this.isValid()) {
      this.props.onDataReceived(this.isValid());
      this.clearForm();
    };
  },
  checkData: function() {
    if (!this.state.name) {
      this.setState({nameTipIsShown: true});
    };
    if (!this.state.email) {
      this.setState({emailTipIsShown: true});
    };
    if (!this.state.phone) {
      this.setState({phoneTipIsShown: true});
    };
  },
  nameIsValid: function(name) {
    if (name) {
      this.setState({name:name, nameTipIsShown: false});
    };
  },
  emailIsValid: function(email) {
    if (email) {
      this.setState({email:email, emailTipIsShown: false});
    };
  },
  phoneIsValid: function(phone) {
    if (phone) {
      this.setState({phone: phone, phoneTipIsShown: false});
    };
  },
  isValid: function() {
    if (this.state.name && this.state.email && this.state.phone) {
      return {
        name: this.state.name,
        email: this.state.email,
        phone : this.state.phone
      }
    } else {
      return false
    };
  },
  clearForm: function() {
    this.setState({clear:true});
  },
  render: function() {
    return (
      <form onSubmit={this.handleSubmit}>
        <NameInput valueReceived={this.nameIsValid} tipIsShown={this.state.nameTipIsShown} clear={this.state.clear}/>
        <EmailInput valueReceived={this.emailIsValid} tipIsShown={this.state.emailTipIsShown} clear={this.state.clear}/>
        <PhoneInput valueReceived={this.phoneIsValid} tipIsShown={this.state.phoneTipIsShown} clear={this.state.clear}/>
        <div className="registration__field">
          <input type="submit" className="registration__submit" value="Register"/>
        </div>
      </form>
    );
  }
});

module.exports = Registration;

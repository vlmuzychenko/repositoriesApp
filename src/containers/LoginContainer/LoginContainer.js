// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

// Instruments
import LoginComponent from '../../components/LoginComponent/LoginComponent';
import { addUserName } from '../../actions/user';

// App
class LoginContainer extends Component{
  state = {
    name: ''
  }

  handleLoginEnter = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  handleLogin = () => {
    this.props.addUserName(this.state.name);
  }

  render () {
    if (this.props.name !== '') {
      return <Redirect to='/list' />
    }

    return (
      <LoginComponent
        loginEnter  = { this.handleLoginEnter }
        login = { this.handleLogin } />
      )
  }
};

function mapStateToProps(state) {
  return {
    name: state.user.name
  }
}

export default connect(mapStateToProps, { addUserName })(LoginContainer);

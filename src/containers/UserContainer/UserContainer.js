// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';

//Instruments
import UserComponent from '../../components/UserComponent/UserComponent';
import { addUserName } from '../../actions/user';

// App
class UserContainer extends Component {
  state = {
    name: ''
  }

  handleLogout = () => {
    this.props.addUserName(this.state.name);
  }

  render() {
    const name = this.props.name
      ? this.props.name
      : 'Username';
    return (
      <UserComponent
        name = { name }
        logout = { this.handleLogout }/>
    )
  }
}

function mapStateToProps(state) {
  return {
    name: state.user.name
  }
}

export default connect(mapStateToProps, { addUserName })(UserContainer);

// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

// Instruments
import ListComponent from '../../components/ListComponent/ListComponent';
import { changeSelectedTab, fetchUserRepositories } from '../../actions/list';

class ListContainer extends Component{

  componentDidMount() {
    this.props.fetchUserRepositories(this.props.userName);
  }

  render () {
    if (this.props.userName === '') {
      return <Redirect to='/'/>
    }

    return(
      <ListComponent
        changeSelectedTab = { this.props.changeSelectedTab }
        selectedTab = { this.props.selectedTab }
        repositories = { this.props.repositories }
      />
    );
  }
};

function mapStateToProps(state) {
  return {
    userName: state.user.name,
    selectedTab: state.list.tabs,
    repositories: state.list.repositories
  }
}

export default connect(mapStateToProps, { changeSelectedTab, fetchUserRepositories })(ListContainer);

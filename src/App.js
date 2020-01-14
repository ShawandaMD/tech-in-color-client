import React from 'react';
import {connect} from 'react-redux';
import './App.css';
import {getCurrentUser} from './actions/currentUser.js'
import Login from './components/Login.js'


class App extends React.Component{
  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    return (
      <Login />
    );
  }
}

export default connect(mapStateToProps, {getCurrentUser})(App);

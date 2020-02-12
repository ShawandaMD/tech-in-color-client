import React from 'react';
import {connect} from 'react-redux';
import './App.css';
import Login from './components/Login.js';
import Logout from './components/Logout.js';
import {getCurrentUser} from './actions/currentUser.js';
import Signup from './components/Signup.js';
import NavBar from './components/Navbar.js'
import { Route, Switch, withRouter } from 'react-router-dom'



class App extends React.Component{
  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    return (
      <div>
        <NavBar />
        <Signup />

      </div>

    );
  }
}

const mapStateToProps = (state) => {

  return {
    loggedIn: !state.currentUser,
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps, {getCurrentUser})(App);

import React from 'react';
import {connect} from 'react-redux';
import './App.css';
import Login from './components/Login.js'
import Logout from './components/Logout.js'
import {getCurrentUser} from './actions/currentUser.js'
import Signup from './components/Signup.js'



class App extends React.Component{
  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    return (
      <div>
        // consider putting in navbar
        {this.props.loggedIn ? <Login /> : <Logout />}
        <Signup />
      </div>

    );
  }
}

const mapStateToProps = (state) => {
  return {
    loggedIn: !state.currentUser
  }
}

export default connect(mapStateToProps, {getCurrentUser})(App);

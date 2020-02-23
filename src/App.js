import React from 'react';
import {connect} from 'react-redux';
import './App.css';
import Login from './components/Login.js';
// import Logout from './components/Logout.js';
import {getCurrentUser} from './actions/currentUser.js';
import Signup from './components/Signup.js';
import NavBar from './components/Navbar.js'
import Events from './components/Events.js'
import Homepage from  './components/Homepage.js'
import { Route, Switch, withRouter } from 'react-router-dom'



class App extends React.Component{
  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    return (
      <div>

        <Switch>
          <Route exact path='/' render={(props) => this.props.loggedIn ? <NavBar /> : <Homepage />}/>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/signup'component={Signup}/>
          <Route exact path='/events'component={Events}/>

        </Switch>


      </div>

    );
  }
}

const mapStateToProps = (state) => {

  return {
    loggedIn: !!state.currentUser,
    currentUser: state.currentUser
  }
}

export default withRouter(connect(mapStateToProps, {getCurrentUser})(App));

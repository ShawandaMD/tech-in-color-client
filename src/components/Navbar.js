import React from 'react';
import {connect} from 'react-redux';
import Logout from './Logout';
import Login from './Login';
import { NavLink } from 'react-router-dom'


const Navbar = (props) => {
  return(
    <div>
      <NavLink exact activeClassName="dashboard" to="/events" >Home </NavLink>
      <NavLink exact activeClassName="dashboard" to="/my_events" > My Events </NavLink>
      <NavLink exact activeClassName="dashboard" to="/my_events/new" > Create Event </NavLink>

      {props.currentUser ? `Welcome ${props.currentUser.full_name}!` : ""}
      {props.currentUser ? <Logout /> : <Login />}
    </div>
  )
}

const mapStateToProps = ({currentUser}) => {
  return {
    currentUser
  }
}

export default connect(mapStateToProps)(Navbar)

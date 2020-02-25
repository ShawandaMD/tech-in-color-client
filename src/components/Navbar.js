import React from 'react';
import {connect} from 'react-redux';
import Logout from './Logout';
import Login from './Login';
import { NavLink } from 'react-router-dom'


const Navbar = (props) => {
  return(
    <div>
      <NavLink exact activeClassName="dashboard" to="/events" >Home </NavLink>
      <NavLink exact activeClassName="dashboard" to="/" > My Events </NavLink>

      {props.currentUser ? `Welcome ${props.currentUser.f_name}!` : ""}
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

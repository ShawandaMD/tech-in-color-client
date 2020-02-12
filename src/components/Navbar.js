import React from 'react';
import {connect} from 'react-redux';
import { NavLink } from 'react-router-dom'
import Logout from './Logout'
import Login from './Login'


const Navbar = (props) => {
  return(
    <div>
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

import React from 'react';
import {connect} from 'react-redux';
import { NavLink } from 'react-router-dom'
import Logout from './Logout'


const Navbar = () => {
  return()
}

const mapStateToProps = ({currentUser}) => {
  currentUser,
  loggedIn: !!currentUser
}

export default connect(mapStateToProps)(Navbar)

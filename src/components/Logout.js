import React from 'react';
import {connect} from 'react-redux';
import {logout} from '../actions/currentUser.js'
import { withRouter } from 'react-router-dom'


/*Container component*/

const Logout = (props) => {

    const handleLogout = event => {
      event.preventDefault()
      props.logout()
      props.history.push('/')
    }

  return (
    <form onSubmit={handleLogout}>
      <input type="submit" value="Log Out"/>
    </form>
  )
}

export default withRouter(connect(null, {logout})(Logout))

import React from 'react';
import {connect} from 'react-redux';
import {logout} from '../actions/currentUser.js'


/*Container component*/

const Logout = (props) => {

    const handleLogout = event => {
      event.preventDefault()
      props.logout()
    }

  return (
    <form onSubmit={handleLogout}>
      <input type="submit" value="Log Out"/>
    </form>
  )
}

export default connect(null, {logout})(Logout)

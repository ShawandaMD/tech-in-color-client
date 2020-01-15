import React from 'react';
import {connect} from 'react-redux';
import {logout} from '../actions/logout.js'


/*Container component*/

const Logout = (props) => {

    const handleLogout = event => {
      event.preventDefault()
      props.login(props.loginFormData)
    }

  return (
    <form onSubmit={handleLogout}>
      <input type="submit" value="Log Out"/>
    </form>
  )
}

export default connect(null, {logout})(Logout)

import React from 'react';
import {connect} from 'react-redux';


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

const mapStateToProps = (state) => {
  return {
    loginFormData: state.loginForm
  }
}

export default connect(mapStateToProps, {updateLoginForm, login})(Login)

import React from 'react';
import {connect} from 'react-redux';

/*Container component*/

const Login = (state) => {

  return (
    <form onSubmit={undefined}>
      <input type="text" placeholder="Email" id="email" name="email" value={state.email} onChange={undefined}/>
      <input type="text" placeholder="Password" id="password" name="password" value={state.password} onChange={undefined}/>
      <input type="submit" value="Log In"/>
    </form>
  )
}

const mapStateToProps = (state) => {
  return {
    email: state.loginForm.email,
    password: state.loginForm.password
  }
}

export default connect(mapStateToProps)(Login)

import React from 'react';


/*Container component*/

const Login = () => {

  return (
    <form onSubmit={undefined}>
      <input type="text" placeholder="Email" id="email" name="email" value={undefined} onChange={undefined}/>
      <input type="text" placeholder="Password" id="password" name="password" value={undefined} onChange={undefined}/>
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

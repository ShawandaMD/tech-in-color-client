import React from 'react';
import {connect} from 'react-redux';
import {updateLoginForm} from '../actions/loginForm.js'

/*Container component*/

const Login = (state) => {

  const handleChange = event => {
    /*this.setState.loginFormData({
      [event.target.name]: event.target.value
    })WHY DIDNT THIS WORK???*/
    const updatedFormInfo = {
     ...state.loginFormData,
     [event.target.name]: event.target.value
   }
     state.updateLoginForm(updatedFormInfo)
      }

  return (
    <form onSubmit={undefined}>
      <input type="text" placeholder="Email" id="email" name="email" value={state.loginFormData.email} onChange={handleChange}/>
      <input type="text" placeholder="Password" id="password" name="password" value={state.loginFormData.password} onChange={handleChange}/>
      <input type="submit" value="Log In"/>
    </form>
  )
}

const mapStateToProps = (state) => {
  return {
    loginFormData: state.loginForm
    /*email: state.loginForm.email,*/
    /*password: state.loginForm.password*/
  }
}

export default connect(mapStateToProps, {updateLoginForm})(Login)

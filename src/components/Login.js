import React from 'react';
import {connect} from 'react-redux';
import {updateLoginForm} from '../actions/loginForm.js';
import {login} from '../actions/currentUser.js'


/*Container component*/

const Login = (state) => {

  const handleChange = event => {
    /*this.setState.loginFormData({
      [event.target.name]: event.target.value
    })WHY DIDNT THIS WORK???because I'm not using a class component*/
    const updatedFormInfo = {
     ...state.loginFormData,
     [event.target.name]: event.target.value
   }
     state.updateLoginForm(updatedFormInfo)
      }

    /* Now we need to send data so go into action*/
    const handleSubmit = event => {
      event.preventDefault()
      login(state.loginFormData)
    }

  return (
    <form onSubmit={handleSubmit}>
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

export default connect(mapStateToProps, {updateLoginForm, login})(Login)

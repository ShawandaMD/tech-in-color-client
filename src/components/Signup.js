import React from 'react';
import {connect} from 'react-redux';
import {updateSignupForm} from '../actions/signupForm.js'
import {signup} from '../actions/currentUser.js'

// container component

const Signup = (props) => {

  const handleChange = event => {
    const updatedFormInfo = {
     ...props.signupFormData,
     [event.target.name]: event.target.value
   }
     props.updateSignupForm(updatedFormInfo)
      }

  const handleSubmit = event => {
    event.preventDefault()
    props.signup(props.signupFormData)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Email" id="email" name="email" value={props.signupFormData.email} onChange={handleChange}/>
      <input type="text" placeholder="Password" id="password" name="password" value={props.signupFormData.password} onChange={handleChange}/>
      <input type="text" placeholder="First Name" id="f_name" name="f_name" value={props.signupFormData.f_name} onChange={handleChange}/>
      <input type="text" placeholder="Last Name" id="l_name" name="l_name" value={props.signupFormData.l_name} onChange={handleChange}/>
      <input type="text" placeholder="City" id="city" name="city" value={props.signupFormData.city} onChange={handleChange}/>
      <input type="text" placeholder="State" id="state" name="state" value={props.signupFormData.state} onChange={handleChange}/>
      <input type="number" placeholder="Zipcode" id="zip_code" name="zip_code" value={props.signupFormData.zip_code} onChange={handleChange}/>
      <input type="submit" value="Sign Up"/>
    </form>
  )
}

const mapStateToProps = (state) => {
  return {
    signupFormData: state.signupForm
  }
}

export default connect(mapStateToProps, {updateSignupForm, signup})(Signup)

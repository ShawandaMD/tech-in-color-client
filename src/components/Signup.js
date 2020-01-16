import React from 'react';
import {connect} from 'react-redux';

// container component

const Signup = (props) => {

  return (
    <form onSubmit={undefined}>
      <input type="text" placeholder="Email" id="email" name="email" value={undefined} onChange={handleChange}/>
      <input type="text" placeholder="Password" id="password" name="password" value={undefined} onChange={handleChange}/>
      <input type="text" placeholder="First Name" id="f_name" name="f_name" value={undefined} onChange={handleChange}/>
      <input type="text" placeholder="Last Name" id="l_name" name="l_name" value={undefined} onChange={handleChange}/>
      <input type="text" placeholder="City" id="city" name="city" value={undefined} onChange={handleChange}/>
      <input type="text" placeholder="State" id="state" name="state" value={undefined} onChange={handleChange}/>
      <input type="number" placeholder="Zipcode" id="zip_code" name="zip_code" value={undefined} onChange={handleChange}/>
      <input type="submit" value="Sign up"/>
    </form>
  )
}

export default connect()(Signup)

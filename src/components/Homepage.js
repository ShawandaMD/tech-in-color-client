import React from 'react';
import { Link } from 'react-router-dom'


const Homepage = () => (
  <div>
    <Link to="/login">log In</Link> or <Link to="/signup">Sign up!</Link>
  </div>
);

export default Homepage;

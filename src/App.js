import React from 'react';
import {connect} from 'react-redux';
import {getCurrentUser} from '../acions/currentUser'
import './App.css';
import Login from './components/Login.js'


class App extends React.Component{
  render() {
    return (
      <Login />
    );
  }
}

export default App;

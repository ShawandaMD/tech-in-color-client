import React from 'react';
import {connect} from 'react-redux';

const MyEvents = (props) => {
  const myEventCards = props.myEvents.map(e =>
    <li key={e.id}>{e.title} by {e.organizer}</li>)

  return (
    <ul>{myEventCards}</ul>
  )
}

const mapStateToProps = ({currentUser}) => {
//debugger
  return {
    currentUser,
    myEvents: currentUser.events
  }
}

export default connect(mapStateToProps)(MyEvents)

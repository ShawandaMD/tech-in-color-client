import React from 'react';
import {connect} from 'react-redux';
import {getEvents} from '../actions/events.js'

const Events = (props) => {
  // debugger
  const eventCards = props.eventsData.map(e =>
    <li key={e.id}>{e.title} by {e.organizer}</li>)
  return (
    <ul>{eventCards}</ul>
  )
}

const mapStateToProps = (state) => {
  // debugger
  return {
    eventsData: state.eventReducer
  }
}

export default connect(mapStateToProps, {getEvents})(Events)

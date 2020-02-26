import React from 'react';
import {connect} from 'react-redux';

const Events = (props) => {
  const eventCards = props.eventsData.map(e =>
    <li key={e.id}>{e.title} by {e.organizer}</li>)
  return (
    <ul>{eventCards}</ul>
  )
}

const mapStateToProps = (state) => {
  return {
    eventsData: state.eventReducer
  }
}

export default connect(mapStateToProps)(Events)

import React from 'react';
import {connect} from 'react-redux';
import {getEvents} from '../actions/events.js'

const Events = (props) => {
  debugger
  return(
    <div>
      {props.getEvents()}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    eventsData: state.eventReducer
  }
}

export default connect(mapStateToProps, {getEvents})(Events)

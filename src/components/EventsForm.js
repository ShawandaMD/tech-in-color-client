import React from 'react';
import {connect} from 'react-redux';
import updateEventForm from '../actions/eventsForm.js'



const EventForm = (props) => {

  return (
    <form onSubmit={undefined}>
      <input type="text" placeholder="Title" id="title" name="title" value={undefined} onChange={undefined}/>
      <input type="text" placeholder="Description" id="description" name="description" value={undefined} onChange={undefined}/>
      <input type="date" placeholder="Date" id="date" name="date" value={undefined} onChange={undefined}/>
      <input type="time" placeholder="Time" id="time" name="time" value={undefined} onChange={undefined}/>
      <input type="link" placeholder="Link" id="link" name="link" value={undefined} onChange={undefined}/>
      <input type="submit" value="Create Event"/>
    </form>
  )
}

export default connect()(EventForm)

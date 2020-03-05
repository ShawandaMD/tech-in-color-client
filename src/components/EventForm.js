import React from 'react';
import {connect} from 'react-redux';
import {updateEventForm} from '../actions/eventsForm.js' //I want to update the new events form
//create a new event


const EventForm = (props) => {

  const handleChange = event => {
    const updatedFormInfo = {
     ...props.eventsFormData,
     [event.target.name]: event.target.value
   }
     props.updateEventForm(updatedFormInfo)
      }

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

const mapStateToProps = (state) => {

  return {
    eventFormData: state.eventsForm
  }
}

export default connect(mapStateToProps, {updateEventForm})(EventForm)

import React from 'react';
import {connect} from 'react-redux';
import {updateEventForm} from '../actions/eventForm.js'; //I want to update the new events form
import {createEvent} from '../actions/events.js'//create a new event


const EventForm = (props) => {
  
  const handleChange = event => {
    const updatedFormInfo = {
     ...props.eventFormData,
     [event.target.name]: event.target.value
   }
     props.updateEventForm(updatedFormInfo)
      }

    const handleSubmit = event => {
      event.preventDefault()
      props.createEvent({
        ...props.eventFormData,
          user_id: props.userId,
          organizer: props.organizer
      },
      props.history
    )
    }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Title" id="title" name="title" value={props.eventFormData.title} onChange={handleChange}/>
      <input type="text" placeholder="Description" id="description" name="description" value={props.eventFormData.description} onChange={handleChange}/>
      <input type="text" placeholder="City" id="city" name="city" value={props.eventFormData.city} onChange={handleChange}/>
      <input type="text" placeholder="State" id="state" name="state" value={props.eventFormData.state} onChange={handleChange}/>
      <input type="date" placeholder="Date" id="date" name="date" value={props.eventFormData.date} onChange={handleChange}/>
      <input type="time" placeholder="Time" id="time" name="time" value={props.eventFormData.time} onChange={handleChange}/>
      <input type="link" placeholder="Link" id="link" name="link" value={props.eventFormData.link} onChange={handleChange}/>
      <input type="submit" value="Create Event"/>
    </form>
  )
}

const mapStateToProps = (state) => {
  const userId = state.currentUser ? state.currentUser.id : ""
  const organizer = state.currentUser ? state.currentUser.full_name : ""
  return {
    eventFormData: state.eventForm,
    userId,
    organizer
  }
}

export default connect(mapStateToProps, {updateEventForm, createEvent})(EventForm)

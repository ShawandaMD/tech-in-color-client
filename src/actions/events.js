// SYNCHRONOUS ACTION CREATORS
export const setEvents = (events) => {
  return {
    type: "SET_ALL_EVENTS",
    events
  }
}

 // ASYNCHRONOUT ACTION CREATORS

export const getEvents = () => {
 return dispatch => {
   return fetch("http://localhost:3001/events", {
     credentials: "include",
     method: 'GET',
     headers: {
       Accept: 'application/json',
         "Content-Type": 'application/json'
     }
   })
   .then((response) => response.json())
   .then(eventsArray => {
     if (eventsArray.error) {
       alert(eventsArray.error)
     } else {
       dispatch(setEvents(eventsArray))
     }
   })
   .catch(console.log)
 }
}

export const createEvent = (data) => {
  console.log("NEW USER", data)
  debugger
  return dispatch => {
    debugger
    const eventData = {
      event: data
    }
    return fetch("http://localhost:3001/events", {
      credentials: "include",
      method: 'POST',
      headers: {
        Accept: 'application/json',
          "Content-Type": 'application/json'
      },
      body: JSON.stringify(eventData)
    })
    .then((response) => response.json())
    .then(event => {
      if (event.error) {
        alert(event.error)
      } else {
        dispatch(getEvents())
      }
    })
    .catch(console.log)
  }
}

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
   .then(events => {
     debugger
     if (events.error) {
       alert(events.error)
     } else {
       dispatch(setEvents(events))
     }
   })
   .catch(console.log)
 }
}

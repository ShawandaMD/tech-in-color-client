
 // ASYNCHRONOUT ACTION CREATORS

 export const allEvents = () => {
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
       if (events.error) {
         alert(events.error)
       } else {
         dispatch(setEvents(events))
       }
     })
     .catch(console.log)
   }
 }
   }
 }

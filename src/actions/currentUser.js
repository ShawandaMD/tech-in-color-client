import { getEvents } from "./events.js"

/* SYNCHRONOUS ACTION CREATORS(REFLECTED IN REDUCER) */
export const setCurrentUser = user => {
    return {
      type: "SET_CURRENT_USER",
      user
    }
}

export const clearCurrentUser = () => {
    return {
      type: "CLEAR_CURRENT_USER"
    }
}

/* ASYNCHRONOUS ACTION CREATORS */

export const login = (credentials, history) => {
console.log("READ CREDENTIALS", credentials)
  return dispatch => {
    return fetch("http://localhost:3001/login", {
      credentials: "include",
      method: 'POST',
      headers: {
        Accept: 'application/json',
          "Content-Type": 'application/json'
      },
      body: JSON.stringify(credentials)
    })
    .then((response) => response.json())
    .then(user => {
      //debugger
      if (user.error) {
        alert(user.error)
      } else {
        dispatch(setCurrentUser(user))
        dispatch(getEvents())
        history.push('/events')
      }
    })
    .catch(console.log)
  }
}

export const logout = () => {
  return dispatch => {
    dispatch(clearCurrentUser())
    return fetch("http://localhost:3001/logout",{
      credentials: "include",
      method: 'DELETE'
    })
    .then(res => res.json());
  };
}

export const signup = data => {
  console.log("NEW USER", data)
  return dispatch => {
    const userData = {
      user: data
    }
    return fetch("http://localhost:3001/signup", {
      credentials: "include",
      method: 'POST',
      headers: {
        Accept: 'application/json',
          "Content-Type": 'application/json'
      },
      body: JSON.stringify(userData)
    })
    .then((response) => response.json())
    .then(user => {
      if (user.error) {
        alert(user.error)
      } else {
        dispatch(setCurrentUser(user))
      }
    })
    .catch(console.log)
  }
}

export const getCurrentUser = () => {
  return dispatch => {
    return fetch("http://localhost:3001/get_current_user", {
      credentials: "include",
      method: 'GET',
      headers: {
        Accept: 'application/json',
          "Content-Type": 'application/json'
      }
    })
    .then((response) => response.json())
    .then(user => {
      if (user.error) {
        alert(user.error)
      } else {
        dispatch(setCurrentUser(user))
        dispatch(getEvents())
      }
    })
    .catch(console.log)
  }
}

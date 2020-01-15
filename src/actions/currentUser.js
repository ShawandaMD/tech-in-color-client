export const setCurrentUser = user => {
    return {
      type: "SET_CURRENT_USER",
      user
    }
}

/* ASYNCHRONOUS */

export const login = credentials => {
console.log("READ CREDENTIALS", credentials)
// debugger
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
      if (user.error) {
        alert(user.error)
      } else {
        dispatch(setCurrentUser(user))
      }
    })
    .catch(console.log)
  }
}

export const logout = () =>{
  
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
      }
    })
    .catch(console.log)
  }
}

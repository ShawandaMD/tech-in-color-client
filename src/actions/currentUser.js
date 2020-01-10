export const setCurrentUser = user => {
    return {
      type: "SET_CURRENT_USER",
      user
    }
}

/*the type should be the same as in the reducer and below the reducer action should speak to rails */
/* ASYNC */
/*return a function that returns dispatch and this fetch to rails 3001*/

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

  // get request for user
  export const getCurrentUser = credentials => {
    return dispatch => {
      return fetch("http://localhost:3001/set_current_user", {
        credentials: "include",
        method: 'GET',
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

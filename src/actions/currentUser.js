export const setCurrentUser = user => {
    return (
      type: "SET_CURRENT_USER",
      user
    )
}

/*the type should be the same as in the reducer and below the reducer action should speak to rails */
/* ASYNC */
/*return a function that returns dispatch and this fetch to rails 3001*/

export const login = credentials => {
  return dispatch => {
    return fetch("http://localhost:3001/login", {
      method: 'POST',
      headers: {
      'Content-Type': 'application/json',
      body: JSON.stringify(credentials),
    }
    })
  }
}

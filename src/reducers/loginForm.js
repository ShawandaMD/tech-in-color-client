/*create a initial state because we dont want all the data*/
const initialState = {email: "", password: ""}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'NEW_LOGIN_FORM'
      return
    default:
      return state

  }

/*create a initial state because we dont want all the data*/
const initialState = {
  email: "THE",
  password: ""
}

export default (state = initialState, action) => {
  /*debugger*/
  switch (action.type) {
    case 'NEW_LOGIN_FORM':
      return action.formData/*WHY????*/
    default:
      return state
    }
  };

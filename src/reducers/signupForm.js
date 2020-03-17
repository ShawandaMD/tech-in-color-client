const initialState = {
  email: "",
  password: "",
  full_name: "",
  city: "",
  state: ""
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_SIGNUP_FORM':
      return action.formData
    default:
      return state
    }
}

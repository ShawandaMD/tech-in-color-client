const initialState = {
  email: "",
  password: "",
  f_name: "",
  l_name: "",
  city: "",
  state: "",
  zip_code: ""
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_SIGNUP_FORM':
      return action.formData
    default:
      return state
    }
}

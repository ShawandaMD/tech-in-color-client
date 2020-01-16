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
    case '':
      return
    default:
      return state
    }
}

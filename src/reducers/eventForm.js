const initialState = {
  title: "",
  description: "",
  date: "",
  time: "",
  link: "",
  city: "",
  state: ""
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_EVENT_FORM':
      return action.formData
    default:
      return state
    }
}

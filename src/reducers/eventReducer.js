const initialState = []

export default (state = initialState, action) => {
  switch(action.type) {
    case 'SET_ALL_EVENTS':
      return action.events
    default:
      return state;
  }
};

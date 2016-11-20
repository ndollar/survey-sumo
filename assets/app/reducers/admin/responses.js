const responses = (state = [], action) => {
  switch (action.type) {
    case 'SET_ADMIN_RESPONSES':
      return action.responses;
    default:
      return state;
  }
};

export default responses;

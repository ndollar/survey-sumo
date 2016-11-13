const adminResponses = (state = [], action) => {
  switch (action.type) {
    case 'SET_ADMIN_RESPONSES':
      return action.adminResponses
    default:
      return state;
  }
};

export default adminResponses;

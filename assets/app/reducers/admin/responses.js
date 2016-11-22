const initialState = {
  initialized: false,
  responses: [],
};

const responses = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ADMIN_RESPONSES':
      return {
        initialized: true,
        responses: action.responses,
      };
    default:
      return state;
  }
};

export default responses;

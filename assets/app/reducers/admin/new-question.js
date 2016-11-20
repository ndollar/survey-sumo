const initialState = {
  text: '',
  choices: [],
  fetching: [],
};

const newQuestion = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_QUESTION_TEXT':
      return Object.assign({}, state, {
        text: action.text,
      });
    case 'NEW_CHOICE':
      return Object.assign({}, state, {
        choices: [...state.choices, {
          text: action.text,
          viewId: action.viewId,
        }],
      });

    case 'REMOVE_CHOICE':
      return Object.assign({}, state, {
        choices: state.choices.filter(c => c.viewId !== action.viewId),
      });
    case 'SAVE_QUESTION':
      return {
        text: initialState.text,
        choices: initialState.choices,
        fetching: [
          ...state.fetching,
          {
            id: action.id,
            text: state.text,
            choices: state.choices,
          },
        ],
      };
    default:
      return state;
  }
};

export default newQuestion;

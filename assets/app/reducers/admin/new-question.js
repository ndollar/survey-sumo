const initialState = {
  text: '',
  choices: [],
  saveError: { error: '' },
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
    case 'CLEAR_QUESTION':
      return initialState;
    case 'SAVE_QUESTION_ERROR':
      return Object.assign({}, state, {
        saveError: action.error,
      });
    case 'CLEAR_NEW_QUESTION_ERRORS':
      return Object.assign({}, state, {
        saveError: initialState.saveError,
      });
    default:
      return state;
  }
};

export default newQuestion;

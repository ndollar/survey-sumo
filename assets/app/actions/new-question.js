
const setQuestionText = (value) => {
  return {
    type: 'SET_QUESTION_TEXT',
    text: value,
  }
};


const newChoice = (value) => {
  return {
    type: 'NEW_CHOICE',
    text: value,
  }
};


let asyncId = 0;
const saveQuestion = () => {
  return {
    type: 'SAVE_QUESTION',
    id: (asyncId++).toString(),
  }
};

export { setQuestionText, newChoice, saveQuestion };

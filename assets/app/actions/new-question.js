const setQuestionText = (value) => ({
  type: 'SET_QUESTION_TEXT',
  text: value,
});

const newChoice = (value) => ({
  type: 'NEW_CHOICE',
  text: value,
});


let asyncId = 0;
const saveQuestion = () => ({
  type: 'SAVE_QUESTION',
  id: (asyncId++).toString(),
});

export { setQuestionText, newChoice, saveQuestion };

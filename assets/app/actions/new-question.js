const setQuestionText = (value) => ({
  type: 'SET_QUESTION_TEXT',
  text: value,
});

let choiceId = 0;
const newChoice = (value) => ({
  type: 'NEW_CHOICE',
  text: value,
  viewId: (choiceId++).toString(),
});

const removeChoice = (viewId) => ({
  type: 'REMOVE_CHOICE',
  viewId,
});

let asyncId = 0; // TODO: Is this used?
const saveQuestion = () => ({
  type: 'SAVE_QUESTION',
  id: (asyncId++).toString(),
});

export { setQuestionText, newChoice, saveQuestion, removeChoice };

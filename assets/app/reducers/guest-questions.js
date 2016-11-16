const initialState = {
  allQuestions: [],
  allQuestionsById: [],
  availableQuestionIds: [],
  randomQuestion: null,
  initialized: false,
};

const buildAllQuestionsById = (allQuestions) => {
  const questionsById = {};
  for (let i = 0; i < allQuestions.length; i++) {
    questionsById[allQuestions[i].id] = allQuestions[i];
  }
  return questionsById;
};


const nextRandomQuestion = (availableQuestionIds, allQuestionsById) => {
  if (availableQuestionIds.length === 0) {
    return null;
  }
  return allQuestionsById[availableQuestionIds[
    Math.floor((Math.random() * availableQuestionIds.length))
  ]];
};


const guestQuestions = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_GUEST_QUESTIONS': {
      const allQuestions = action.guestQuestions;
      const allQuestionsById = buildAllQuestionsById(allQuestions);
      const availableQuestionIds = allQuestions.map(q => q.id);
      const initialized = true;
      const randomQuestion = nextRandomQuestion(
        availableQuestionIds, allQuestionsById);
      return {
        allQuestions,
        allQuestionsById,
        availableQuestionIds,
        initialized,
        randomQuestion,
      };
    }
    case 'QUESTION_ANSWERED': {
      const availableQuestionIds = state.availableQuestionIds
        .filter(i => (i !== action.questionId));
      return Object.assign({}, state, {
        availableQuestionIds,
        randomQuestion: nextRandomQuestion(availableQuestionIds, state.allQuestionsById),
      });
    }
    default:
      return state;
  }
};

export default guestQuestions;

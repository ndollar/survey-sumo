import { answeredQuestions } from 'app/helpers/storage/answered-questions';

const initialState = {
  allQuestions: [],
  allQuestionsById: [],
  availableQuestionIds: [],
  answeredQuestionIds: new Set(answeredQuestions()),
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


const questions = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_GUEST_QUESTIONS': {
      const allQuestions = [
        ...state.allQuestions,
        ...action.guestQuestions,
      ];
      const allQuestionsById = buildAllQuestionsById(allQuestions);
      const answeredQuestionIds = state.answeredQuestionIds;
      const availableQuestionIds = [
        ...state.availableQuestionIds,
        ...action.guestQuestions
          .map(q => q.id)
          .filter(id => !answeredQuestionIds.has(id)),
      ];
      const initialized = true;
      const randomQuestion = nextRandomQuestion(
        availableQuestionIds, allQuestionsById
      );
      return {
        allQuestions,
        allQuestionsById,
        availableQuestionIds,
        answeredQuestionIds,
        initialized,
        randomQuestion,
      };
    }
    case 'QUESTION_ANSWERED': {
      const availableQuestionIds = state.availableQuestionIds
        .filter(i => (i !== action.questionId));
      const answeredQuestionIds = new Set([
        ...state.answeredQuestionIds,
        action.questionId,
      ]);
      return Object.assign({}, state, {
        availableQuestionIds,
        answeredQuestionIds,
        randomQuestion: nextRandomQuestion(availableQuestionIds, state.allQuestionsById),
      });
    }
    case 'CLEAR_SAVED_QUESTIONS': {
      const availableQuestionIds = state.allQuestions.map(q => q.id);
      return Object.assign({}, state, {
        availableQuestionIds,
        answeredQuestionIds: new Set(),
        randomQuestion: nextRandomQuestion(availableQuestionIds, state.allQuestionsById),
      });
    }
    default:
      return state;
  }
};

export default questions;

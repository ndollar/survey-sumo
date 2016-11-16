const setGuestQuestions = guestQuestions => ({
  type: 'SET_GUEST_QUESTIONS',
  guestQuestions,
});

const questionAnswered = (questionId, choiceId) => ({
  type: 'QUESTION_ANSWERED',
  questionId,
  choiceId,
});

export { setGuestQuestions, questionAnswered };

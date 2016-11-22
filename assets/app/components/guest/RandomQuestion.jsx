import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { questionAnswered } from 'app/actions/guest/questions';
import _ from 'underscore';
import AnswerChoice from 'app/components/guest/AnswerChoice';
import NoMoreQuestions from 'app/components/guest/NoMoreQuestions';

require('app/stylesheets/components/guest/random-question.css');
require('app/stylesheets/components/question-common.css');

const mapStateToProps = (state) => ({
  question: state.guest.questions.randomQuestion,
  initialized: state.guest.questions.initialized,
});

const mapDispatchToProps = (dispatch) => ({
  saveAnswer(questionId, choiceId) {
    dispatch(questionAnswered(questionId, choiceId));
  },
});

const RandomQuestion = ({ question, initialized, saveAnswer }) => {
  let choiceId;
  const onChoiceClick = (e) => (choiceId = e.target.value);
  if (!initialized) {
    return (
      <div className="alt-message">
        Loading Questions
      </div>
    );
  }
  if (!question) {
    return <NoMoreQuestions />;
  }
  choiceId = _.first(question.Choices).id;
  return (
    <div className="question">
      <div className="question-text">{question.text}</div>
      <div className="question-choices">
        {question.Choices.map(choice => (
          <AnswerChoice
            key={choice.id}
            onClick={onChoiceClick}
            choice={choice}
            defaultChecked={choice.id === choiceId}
          />
        ))}
      </div>
      <div className="random-question-submit-wrapper">
        <button
          onClick={() => saveAnswer(question.id, choiceId)}
          className="btn btn-primary"
        >Submit</button>
      </div>
    </div>
  );
};

RandomQuestion.propTypes = {
  question: PropTypes.shape({
    Choices: PropTypes.arrayOf(PropTypes.shape({
      text: PropTypes.string.isRequired,
    })).isRequired,
    text: PropTypes.string.isRequired,
  }),
  initialized: PropTypes.bool.isRequired,
  saveAnswer: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(RandomQuestion);

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { questionAnswered, clearSavedQuestions } from 'app/actions/guest/questions';
import _ from 'underscore';

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
  resetOnClick(e) {
    e.preventDefault();
    dispatch(clearSavedQuestions());
  },
});

const RandomQuestion = ({ question, initialized, saveAnswer, resetOnClick }) => {
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
    return (
      <div className="alt-message">
        No questions to answer
        <span className="reset-questions">
          <a
            href="#"
            onClick={resetOnClick}
          >(Reset)</a>
        </span>
      </div>
    );
  }
  choiceId = _.first(question.Choices).id;
  return (
    <div className="question">
      <div className="question-text">{question.text}</div>
      <div className="question-choices">
        {question.Choices.map(choice => (
          <div key={choice.id} className="question-choice">
            <label className="question-choice-label">
              <input
                defaultChecked={choice.id === choiceId}
                className="question-choice-radio"
                name="question-choice"
                type="radio"
                onClick={onChoiceClick}
                defaultValue={choice.id}
              />
              <span className="choice-text">{choice.text}</span>
            </label>
          </div>
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
  resetOnClick: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(RandomQuestion);

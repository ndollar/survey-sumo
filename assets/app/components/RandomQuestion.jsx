import React from 'react';
import { connect } from 'react-redux';
import { Answer } from 'app/api';
import { questionAnswered } from 'app/actions/guest-questions';

const mapStateToProps = (state) => {
  return {
    question: state.guestQuestions.randomQuestion,
    initialized: state.guestQuestions.initialized
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    saveAnswer(questionId, choiceId) {
      if (choiceId) {
        Answer.create(choiceId)
          .then(() => {
            dispatch(questionAnswered(questionId, choiceId));
          });
      }
    },
  };
};

// TODO: Make simpler sub components for each
const RandomQuestion = ({ question, initialized, saveAnswer }) => {
  let choiceId;
  const onChoiceClick = (e) => {
    choiceId = e.target.value;
  };
  if (!initialized) {
    return (<div>Loading Questions</div>);
  }
  if (!question) {
    return (<div>No Questions</div>);
  }
  choiceId = question.Choices[0].id;
  return (
    <div className="random-questions">
      <h2>Random Quesion</h2>
      <div className="question">
        <div className="question-text">{question.text}</div>
        <div className="question-choices">
          {question.Choices.map(choice => (
            <div className="question-choice">
              <input
                name="question-choice"
                type="radio"
                onClick={onChoiceClick}
                defaultValue={choice.id}
              /> <span className="choice-text">{choice.text}</span>
            </div>
          ))}
        </div>
        <button onClick={() => saveAnswer(question.id, choiceId)}>Submit</button>
      </div>
    </div>);
};


export default connect(mapStateToProps, mapDispatchToProps)(RandomQuestion);

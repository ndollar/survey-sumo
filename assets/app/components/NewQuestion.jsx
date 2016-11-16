import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { setQuestionText, newChoice } from 'app/actions/new-question';

require('app/stylesheets/components/new-question.css');

const ENTER_KEY = 13;

const mapStateToProps = state => ({
  newQuestion: state.newQuestion,
});

const mapDispatchToProps = dispatch => ({
  onBlurQuestion: event => dispatch(setQuestionText(event.target.value)),
  addChoice: event => {
    if (event.keyCode !== ENTER_KEY) {
      return;
    }
    event.preventDefault();
    dispatch(newChoice(event.target.value));
    event.target.value = '';
  },
});

const NewQuestion = ({ newQuestion, onBlurQuestion, addChoice }) => (
  <div className="form-group">
    <div className="new-question-input">
      <input
        type="text"
        defaultValue={newQuestion.text}
        className="form-control"
        onBlur={onBlurQuestion}
        placeholder="Enter your survey question"
      />
    </div>
    <div className="add-choice-wrapper">
      <span>Add Choice: </span>
      <input
        className="form-control"
        name="add-choice"
        onKeyDown={addChoice}
      />
    </div>
    <div className="question-choices">
    {newQuestion.choices.map(({ text }) => (
      <div className="choice-text">{text}</div>
    ))}
    </div>
  </div>
);

NewQuestion.propTypes = {
  newQuestion: PropTypes.shape({
    choices: PropTypes.arrayOf(PropTypes.shape({
      text: PropTypes.string.isRequired,
    })).isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
  onBlurQuestion: PropTypes.func.isRequired,
  addChoice: PropTypes.func.isRequired,
};


export default connect(mapStateToProps, mapDispatchToProps)(NewQuestion);

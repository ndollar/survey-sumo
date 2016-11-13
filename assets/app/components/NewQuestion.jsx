import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { setQuestionText, newChoice } from 'app/actions/new-question';

const ENTER_KEY = 13;

const mapStateToProps = state => {
  return {
    newQuestion: state.newQuestion,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setQuestionText: event => dispatch(setQuestionText(event.target.value)),
    addChoice: event => {
      if (event.keyCode !== ENTER_KEY) {
        return;
      }
      event.preventDefault();
      dispatch(newChoice(event.target.value));
      event.target.value = "";
    }
  };
};

const NewQuestion = ({ newQuestion, setQuestionText, addChoice }) => {
  return (<div className="form-group">
    <input
      type="text"
      defaultValue={newQuestion.text}
      className="form-control"
      onBlur={setQuestionText}
      placeholder="Enter your survey question"
    />
  <span>Add Choice: </span>
    <input
      name="add-choice"
      onKeyDown={addChoice}
    />
  {newQuestion.choices.map(({ text }) => (
    <div>{text}</div>
  ))}
</div>);
};

// TODO: PropTypes


export default connect(mapStateToProps, mapDispatchToProps)(NewQuestion);

import React, { PropTypes } from 'react';

const AnswerChoice = ({ choice, onClick, defaultChecked }) => (
  <div className="question-choice">
    <label className="question-choice-label">
      <input
        defaultChecked={defaultChecked}
        className="question-choice-radio"
        name="question-choice"
        type="radio"
        onClick={onClick}
        defaultValue={choice.id}
      />
      <span className="choice-text">{choice.text}</span>
    </label>
  </div>
);

AnswerChoice.propTypes = {
  choice: PropTypes.shape({
    text: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
  defaultChecked: PropTypes.bool.isRequired,
};

export default AnswerChoice;

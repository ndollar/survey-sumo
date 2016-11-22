import React, { PropTypes } from 'react';

const AdminResponseChoice = ({ choice }) => (
  <div className="choice-text">
    {choice.text} -
    <span className="response-count">
      {choice.Answers.length} responses
    </span>
  </div>
);

AdminResponseChoice.propTypes = {
  choice: PropTypes.shape({
    text: PropTypes.string.isRequired,
    Answers: PropTypes.array.isRequired,
  }).isRequired,
};

export default AdminResponseChoice;

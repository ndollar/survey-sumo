import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = ({ adminResponses }) => {
  return { adminResponses };
};

const AdminResponses = ({ adminResponses }) => (
  <div className="admin-responses">
    {adminResponses.map(response => (
      <div className="admin-response">
        <div className="question-text">{response.text}</div>
        {response.Choices.map(choice => (
          <div className="choice-text">{choice.text} - {choice.Answers.length}</div>
        ))}
      </div>
    ))}
  </div>
);

export default connect(mapStateToProps)(AdminResponses);

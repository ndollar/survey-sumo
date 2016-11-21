import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

require('app/stylesheets/components/admin-responses.css');
require('app/stylesheets/components/question-common.css');

const mapStateToProps = ({ admin: { responses } }) => ({ responses });

const AdminResponses = ({ responses }) => {
  if (responses.length > 0) {
    return (
      <div className="questions-container">
        {responses.map(response => (
          <div key={response.id} className="question">
            <div className="question-text">{response.text}</div>
            <div className="question-choices">
              {response.Choices.map(choice => (
                <div key={choice.id} className="choice-text">
                  {choice.text} -
                  <span className="response-count">
                    {choice.Answers.length} responses
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }
  return (<div className="alt-message">Loading responses</div>);
};

AdminResponses.propTypes = {
  responses: PropTypes.arrayOf(PropTypes.shape({
    Choices: PropTypes.arrayOf(PropTypes.shape({
      text: PropTypes.string.isRequired,
      Answers: PropTypes.array.isRequired,
    })).isRequired,
  })),
};

export default connect(mapStateToProps)(AdminResponses);

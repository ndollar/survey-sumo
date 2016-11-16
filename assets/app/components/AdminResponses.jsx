import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

require('app/stylesheets/components/admin-responses.css');

const mapStateToProps = ({ adminResponses }) => ({ adminResponses });

const AdminResponses = ({ adminResponses }) => {
  if (adminResponses) {
    return (
      <div className="admin-responses">
        {adminResponses.map(response => (
          <div className="question">
            <div className="question-text">{response.text}</div>
            <div className="question-choices">
              {response.Choices.map(choice => (
                <div className="choice-text">
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
  return (<div className="admin-responses-loading">Loading responses</div>);
};

AdminResponses.propTypes = {
  adminResponses: PropTypes.arrayOf(PropTypes.shape({
    Choices: PropTypes.arrayOf(PropTypes.shape({
      text: PropTypes.string.isRequired,
      Answers: PropTypes.array.isRequired,
    })).isRequired,
  })),
};

export default connect(mapStateToProps)(AdminResponses);

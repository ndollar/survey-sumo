import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import AdminResponse from 'app/components/admin/AdminResponse';

require('app/stylesheets/components/admin/responses.css');
require('app/stylesheets/components/question-common.css');

const mapStateToProps = (state) => ({
  responses: state.admin.responses.responses,
  initialized: state.admin.responses.initialized,
});

const AdminResponses = ({ responses, initialized }) => {
  if (!initialized) {
    return (<div className="alt-message">Loading responses</div>);
  }
  if (responses.length > 0) {
    return (
      <div className="questions-container">
        {responses.map(response => (
          <AdminResponse key={response.id} response={response} />
        ))}
      </div>
    );
  }
  return (<div className="alt-message">Create a new question!</div>);
};

AdminResponses.propTypes = {
  responses: PropTypes.arrayOf(PropTypes.shape({
    Choices: PropTypes.arrayOf(PropTypes.shape({
      text: PropTypes.string.isRequired,
      Answers: PropTypes.array.isRequired,
    })).isRequired,
  })).isRequired,
  initialized: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(AdminResponses);

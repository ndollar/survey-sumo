import React, { PropTypes } from 'react';
import AdminResponseChoice from 'app/components/admin/AdminResponseChoice';

const AdminResponse = ({ response }) => (
  <div className="question">
    <div className="question-text">{response.text}</div>
    <div className="question-choices">
      {response.Choices.map(choice => (
        <AdminResponseChoice key={choice.id} choice={choice} />
      ))}
    </div>
  </div>
);

AdminResponse.propTypes = {
  response: PropTypes.shape({
    Choices: PropTypes.arrayOf(PropTypes.shape({
      text: PropTypes.string.isRequired,
      Answers: PropTypes.array.isRequired,
    })).isRequired,
  }).isRequired,
};

export default AdminResponse;

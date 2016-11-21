
import React, { PropTypes } from 'react';

const NewQuestionSubmit = ({ onClick, disabled }) => (
  <button
    type="button"
    className="btn btn-primary"
    disabled={disabled}
    onClick={onClick}
    data-dismiss="modal"
  >Save
  </button>
);

NewQuestionSubmit.propTypes = {
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default NewQuestionSubmit;

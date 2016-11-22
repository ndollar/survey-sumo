import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { setQuestionText } from 'app/actions/admin/new-question';

const mapDispatchToProps = dispatch => ({
  saveQuestionText: event => {
    dispatch(setQuestionText(event.target.value));
  },
});

let input;
const NewQuestionText = ({ saveQuestionText, defaultValue }) => {
  if (input) {
    input.value = defaultValue;
  }
  return (
    <div className="new-question-input">
      <input
        ref={node => (input = node)}
        defaultValue={defaultValue}
        type="text"
        className="form-control"
        onBlur={saveQuestionText}
        placeholder="Enter your survey question"
      />
      <small className="form-text text-muted">Minimum of 8 characaters</small>
    </div>
  );
};

NewQuestionText.propTypes = {
  defaultValue: PropTypes.string.isRequired,
  saveQuestionText: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(NewQuestionText);

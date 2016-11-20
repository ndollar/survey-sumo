import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { setQuestionText } from 'app/actions/new-question';

const mapDispatchToProps = dispatch => ({
  saveQuestionText: event => dispatch(setQuestionText(event.target.value)),
});

const NewQuestionText = ({ defaultValue, saveQuestionText }) => {
  // TODO: Figure out defaultValue
  let value;
  return (
    <div className="new-question-input">
      <input
        value={value}
        onChange={e => (value = e.target.value)}
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

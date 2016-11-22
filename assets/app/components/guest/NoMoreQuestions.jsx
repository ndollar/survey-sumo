import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { clearSavedQuestions } from 'app/actions/guest/questions';

const mapDispatchToProps = (dispatch) => ({
  resetOnClick(e) {
    e.preventDefault();
    dispatch(clearSavedQuestions());
  },
});

const NoMoreQuestions = ({ resetOnClick }) => (
  <div className="alt-message">
    No questions to answer
    <span className="reset-questions">
      <a
        href="#"
        onClick={resetOnClick}
      >(Reset)</a>
    </span>
  </div>
);

NoMoreQuestions.propTypes = {
  resetOnClick: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(NoMoreQuestions);

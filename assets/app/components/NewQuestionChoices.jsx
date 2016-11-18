import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { removeChoice } from 'app/actions/new-question';

const mapDispatchToProps = dispatch => ({
  deleteChoice(choiceId) {
    return () => (dispatch(removeChoice(choiceId)));
  },
});

const NewQuestionChoices = ({ choices, deleteChoice }) => (
  <div className="question-choices">
  {choices.map(({ text, viewId }) => (
    <div key={viewId} className="choice-text">
      <span>{text}</span>
      <button
        type="button"
        className="close"
        aria-label="Close"
        onClick={deleteChoice(viewId)}
      ><span aria-hidden="true">&times;</span></button>
    </div>
  ))}
    <div className="choices-needed">{
        choices.length < 2 ?
          `At least ${2 - choices.length} more choices` : ''
        }
    </div>
  </div>
);

NewQuestionChoices.propTypes = {
  choices: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
  })).isRequired,
  deleteChoice: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(NewQuestionChoices);

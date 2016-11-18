import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { saveQuestion } from 'app/actions/new-question';
import { Question } from 'app/api';
import NewQuestionText from 'app/components/NewQuestionText';
import AddChoice from 'app/components/AddChoice';
import NewQuestionChoices from 'app/components/NewQuestionChoices';
import NewQuestionSubmit from 'app/components/NewQuestionSubmit';

require('app/stylesheets/components/new-question.css');


const mapStateToProps = state => ({
  newQuestion: state.newQuestion,
});

const submitValidator = (newQuestion) => (
  newQuestion.text.length < 8
  || newQuestion.choices.length < 2
);

const mapDispatchToProps = dispatch => ({
  onClickSaveQuestion: newQuestion => (
    () => {
      const action = saveQuestion();
      dispatch(action);
      // TODO: Handle response
      Question.create(newQuestion)
        .then();
    }
  ),
});

const NewQuestionContent = ({ newQuestion, onClickSaveQuestion }) => (
  <div>
    <div className="modal-body">
      <div className="form-group">
        <NewQuestionText defaultValue={newQuestion.text} />
        <AddChoice />
        <NewQuestionChoices choices={newQuestion.choices} />
      </div>
    </div>
    <div className="modal-footer">
      <button type="button" className="btn btn-default" data-dismiss="modal">Cancel</button>
      <NewQuestionSubmit
        onClick={onClickSaveQuestion(newQuestion)}
        disabled={submitValidator(newQuestion)}
      />
    </div>
  </div>
);

NewQuestionContent.propTypes = {
  newQuestion: PropTypes.shape({
    choices: PropTypes.arrayOf(PropTypes.shape({
      text: PropTypes.string.isRequired,
    })).isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
  onClickSaveQuestion: PropTypes.func.isRequired,
};


export default connect(mapStateToProps, mapDispatchToProps)(NewQuestionContent);

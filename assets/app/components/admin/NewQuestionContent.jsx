import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { saveQuestion } from 'app/actions/admin/new-question';
import NewQuestionText from 'app/components/admin/NewQuestionText';
import AddChoice from 'app/components/admin/AddChoice';
import NewQuestionChoices from 'app/components/admin/NewQuestionChoices';
import NewQuestionSubmit from 'app/components/admin/NewQuestionSubmit';

require('app/stylesheets/components/admin/new-question.css');


const mapStateToProps = state => ({
  newQuestion: state.admin.newQuestion,
});

const submitValidator = (newQuestion) => (
  newQuestion.text.length < 8
  || newQuestion.choices.length < 2
);

const mapDispatchToProps = dispatch => ({
  onClickSaveQuestion: () => dispatch(saveQuestion()),
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
        onClick={onClickSaveQuestion}
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

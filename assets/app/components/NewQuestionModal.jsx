import React from 'react';
import { connect } from 'react-redux';
import NewQuestion from 'app/components/NewQuestion';
import { saveQuestion } from 'app/actions/new-question';
import { Question } from 'app/api';

const mapStateToProps = state => {
  return {
    newQuestion: state.newQuestion
  };
};

const mapDispatchToProps = dispatch => {
  return {
    saveQuestion: newQuestion => {
      return (e) => {
        const action = saveQuestion();
        dispatch(action);
        // TODO: Handle response
        Question.create(newQuestion)
          .then();
      };
    }
  };
};

const NewQuestionModal = ({ newQuestion, saveQuestion }) => (
  <div className="new-question-container">
    <button type="button" className="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">
       New Question
    </button>
    <div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 className="modal-title" id="myModalLabel">New Question</h4>
          </div>
          <div className="modal-body">
            <NewQuestion />
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-default" data-dismiss="modal">Cancel</button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={saveQuestion(newQuestion)}
                data-dismiss="modal">Save</button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(NewQuestionModal);

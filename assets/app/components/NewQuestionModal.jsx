import React from 'react';
import NewQuestionContext from 'app/components/NewQuestionContent';

const NewQuestionModal = () => (
  <div className="new-question-container">
    <button
      type="button"
      className="btn btn-primary btn-lg"
      data-toggle="modal"
      data-target="#myModal"
    >New Question</button>
    <div
      className="modal fade"
      id="myModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="myModalLabel"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            ><span aria-hidden="true">&times;</span></button>
            <h4 className="modal-title" id="myModalLabel">New Question</h4>
          </div>
          <NewQuestionContext />
        </div>
      </div>
    </div>
  </div>
);

export default NewQuestionModal;

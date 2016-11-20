import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { newChoice } from 'app/actions/new-question';

const ENTER_KEY = 13;

const mapDispatchToProps = dispatch => ({
  addChoice: event => {
    if (event.keyCode !== ENTER_KEY) {
      return;
    }
    event.preventDefault();
    dispatch(newChoice(event.target.value));
    event.target.value = '';
  },
});

const AddChoice = ({ addChoice }) => (
  <div className="add-choice-wrapper">
    <input
      className="form-control"
      name="add-choice"
      onKeyDown={addChoice}
      placeholder="Add choice and press enter"
    />
  </div>
);

AddChoice.propTypes = {
  addChoice: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(AddChoice);

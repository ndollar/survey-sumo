import React from 'react';
import { connect } from 'react-redux';

import AddChoice from 'app/components/AddChoice';

const mapStateToProps = state => { choices: state.admin.newQuestion.choices };

const NewChoices = ({ choices }) => (
  /*
  <div>
    <AddChoice />
    {choices.map(choice => (
      <span class="new-choice">choice.text</span>
    )}
  </div>
  */
);

export default connect(mapStateToProps)(NewChoices);

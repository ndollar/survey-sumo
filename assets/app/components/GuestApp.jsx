import React from 'react';
import Header from 'app/components/Header';
import RandomQuestion from 'app/components/RandomQuestion';
import ErrorBlock from 'app/components/ErrorBlock';

require('app/stylesheets/components/question-common.css');

const messageFromState = state => (
  state.guest.questions.answerError.error
);

const GuestApp = () => (
  <main>
    <Header />
    <div className="questions-container">
      <ErrorBlock messageFromState={messageFromState} />
      <RandomQuestion />
    </div>
  </main>
);

export default GuestApp;

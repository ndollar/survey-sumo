import React from 'react';
import Header from 'app/components/Header';
import RandomQuestion from 'app/components/RandomQuestion';
import ErrorBlock from 'app/components/ErrorBlock';

require('app/stylesheets/components/guest-app.css');

const messageFromState = state => (
  state.guest.questions.answerError.error
);

const GuestApp = () => (
  <main>
    <Header />
    <div id="random-question-wrapper">
      <ErrorBlock messageFromState={messageFromState} />
      <RandomQuestion />
    </div>
  </main>
);

export default GuestApp;

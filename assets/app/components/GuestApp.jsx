import React from 'react';
import Header from 'app/components/Header';
import RandomQuestion from 'app/components/RandomQuestion';

require('app/stylesheets/components/guest-app.css');

const GuestApp = () => (
  <main>
    <Header />
    <div id="random-question-wrapper">
      <RandomQuestion />
    </div>
  </main>
);

export default GuestApp;

import React from 'react';
import AdminHeader from 'app/components/AdminHeader';
import ErrorBlock from 'app/components/ErrorBlock';
import NewQuestionModal from 'app/components/NewQuestionModal';
import AdminResponses from 'app/components/AdminResponses';

require('app/stylesheets/components/admin.css');

// TODO: I'm not crazy about this solution, having to set error messages to '';
const messageFromState = (state) => (
  state.admin.newQuestion.saveError.error
);

const Admin = () => (
  <main>
    <AdminHeader />
    <div>
      <div className="error-block-container">
        <ErrorBlock messageFromState={messageFromState} />
      </div>
      <div className="new-question-wrapper">
        <NewQuestionModal />
      </div>
      <AdminResponses />
    </div>
  </main>
);

export default Admin;

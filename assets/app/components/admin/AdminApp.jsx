import React from 'react';
import AdminHeader from 'app/components/admin/AdminHeader';
import ErrorBlock from 'app/components/ErrorBlock';
import NewQuestionModal from 'app/components/admin/NewQuestionModal';
import AdminResponses from 'app/components/admin/AdminResponses';

require('app/stylesheets/components/admin/admin.css');

const messageFromState = (state) => (
  state.admin.newQuestion.saveError.error
);

const AdminApp = () => (
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

export default AdminApp;

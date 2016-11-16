import React from 'react';
import Header from 'app/components/Header';
import NewQuestionModal from 'app/components/NewQuestionModal';
import AdminResponses from 'app/components/AdminResponses';

require('app/stylesheets/components/admin.css');

const Admin = () => (
  <main>
    <Header />
    <div>
      <div className="new-question-wrapper">
        <NewQuestionModal />
      </div>
      <AdminResponses />
    </div>
  </main>
);

export default Admin;

import React from 'react';
import AdminHeader from 'app/components/AdminHeader';
import NewQuestionModal from 'app/components/NewQuestionModal';
import AdminResponses from 'app/components/AdminResponses';

require('app/stylesheets/components/admin.css');

const Admin = () => (
  <main>
    <AdminHeader />
    <div>
      <div className="new-question-wrapper">
        <NewQuestionModal />
      </div>
      <AdminResponses />
    </div>
  </main>
);

export default Admin;

import React from 'react';
import Header from 'app/components/Header';
import NewQuestionModal from 'app/components/NewQuestionModal';
import AdminResponses from 'app/components/AdminResponses';


const Admin = () => (
  <main>
    <Header />
    <h4>Admin</h4>
    <div>
      <NewQuestionModal />
      <AdminResponses />
    </div>
  </main>
);

export default Admin;

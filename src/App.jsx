// ============================================================
// App.jsx — Root Component
//
// Route map:
//   /                            → redirects to /loginpage
//   /loginpage                   → LoginPage
//   /userdashboard               → UserDashboard
//   /usrinitiatepayment          → UserInitiatePayment
//   /usrviewtranshistory         → UserViewTransHistory
//   /admindashboard              → AdminDashboard
// ============================================================

import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import LoginPage            from './pages/LoginPage';
import UserDashboard        from './pages/user/UserDashboard';
import AdminDashboard       from './pages/admin/AdminDashboard';
import UserInitiatePayment  from './pages/user/UserInitiatePayment';
import UserViewTransHistory from './pages/user/UserViewTransHistory';
import AdminTransactionUpload       from './pages/admin/AdminTransactionUpload';
import AdminResults       from './pages/admin/AdminResults';

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Root path → redirect to login so the page isn't blank */}
        <Route path="/" element={<Navigate to="/loginpage" replace />} />

        {/* Login */}
        <Route path="/loginpage" element={<LoginPage />} />

        {/* User pages */}
        <Route path="/userdashboard"         element={<UserDashboard />} />
        <Route path="/usrinitiatepayment"    element={<UserInitiatePayment />} />
        <Route path="/usrviewtranshistory"   element={<UserViewTransHistory />} />

        {/* Admin pages */}
        <Route path="/admindashboard" element={<AdminDashboard />} />
        <Route path="/admintransactionupload" element={<AdminTransactionUpload />} />
        <Route path="/adminresults" element={<AdminResults />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
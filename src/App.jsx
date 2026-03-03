// ============================================================
// App.jsx — Root Component
//
// Route map:
//   /                            → redirects to /loginpage
//   /loginpage                   → LoginPage
//   /userdashboard               → UserDashboard
//   /userimageupload             → UserImageUpload
//   /usrviewtranshistory         → UserViewTransHistory
//   /admindashboard              → AdminDashboard
// ============================================================

import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import LoginPage            from './pages/LoginPage';
import UserDashboard        from './pages/user/UserDashboard';
import AdminDashboard       from './pages/admin/AdminDashboard';
import UserImageUpload      from './pages/user/UserImageUpload';
import UserViewSubHistory   from './pages/user/UserViewSubHistory';
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
        <Route path="/userimageupload"       element={<UserImageUpload />} />
        <Route path="/userviewsubhistory"   element={<UserViewSubHistory />} />

        {/* Admin pages */}
        <Route path="/admindashboard" element={<AdminDashboard />} />
        <Route path="/admintransactionupload" element={<AdminTransactionUpload />} />
        <Route path="/adminresults" element={<AdminResults />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
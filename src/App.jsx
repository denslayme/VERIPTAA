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
import UserDashboard        from './pages/UserDashboard';
import AdminDashboard       from './pages/AdminDashboard';
import UserInitiatePayment  from './pages/UserInitiatePayment';
import UserViewTransHistory from './pages/UserViewTransHistory';

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
        {/* Admin sub-pages — uncomment when ready:
        <Route path="/admin/upload-transactions" element={<UploadTransactionsPage />} />
        <Route path="/admin/review-submissions"  element={<ReviewSubmissionsPage />} />
        <Route path="/admin/reports"             element={<ViewReportsPage />} />
        */}

      </Routes>
    </BrowserRouter>
  );
}

export default App;
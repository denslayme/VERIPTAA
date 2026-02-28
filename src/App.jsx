// ============================================================
// App.jsx — Root Component
//
// Route map:
//   /loginpage                   → LoginPage
//   /userdashboard               → UserDashboard
//   /usrinitiatepayment          → UserInitiatePayment  (placeholder)
//   /usrviewtransactionhistory   → UserViewTransHistory (placeholder)
//   /admindashboard              → AdminDashboard
//   /admin/upload-transactions   → placeholder (not yet implemented)
//   /admin/review-submissions    → placeholder (not yet implemented)
//   /admin/reports               → placeholder (not yet implemented)
// ============================================================

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LoginPage            from './pages/LoginPage';
import UserDashboard        from './pages/UserDashboard';
import AdminDashboard       from './pages/AdminDashboard';
import UserInitiatePayment  from './pages/UserInitiatePayment';
import UserViewTransHistory from './pages/UserViewTransHistory';

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* ── Login ── */}
        <Route path="/loginpage" element={<LoginPage />} />

        {/* ── User pages ── */}
        <Route path="/userdashboard"             element={<UserDashboard />} />
        <Route path="/usrinitiatepayment"        element={<UserInitiatePayment />} />
        <Route path="/usrviewtransactionhistory" element={<UserViewTransHistory />} />

        {/* ── Admin pages ── */}
        <Route path="/admindashboard" element={<AdminDashboard />} />
        {/* Admin sub-pages — add imports + components when ready:
        <Route path="/admin/upload-transactions"  element={<UploadTransactionsPage />} />
        <Route path="/admin/review-submissions"   element={<ReviewSubmissionsPage />} />
        <Route path="/admin/reports"              element={<ViewReportsPage />} />
        */}

      </Routes>
    </BrowserRouter>
  );
}

export default App;
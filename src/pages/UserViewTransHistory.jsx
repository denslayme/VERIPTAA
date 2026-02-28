// ============================================================
// UserViewTransHistory.jsx — Placeholder Page
// pages/UserViewTransHistory.jsx
//
// Route: /usrviewtransactionhistory
// Navigated to from: UserDashboard → "View payment history" card
//
// Build out this page when you're ready to implement
// the full transaction history view.
// ============================================================

import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/NavBar';
import "../styles/Dashboards.css";

function UserViewTransHistory() {
  const navigate = useNavigate();

  return (
    <div className="user-page">

      {/* Reusable navbar — variant="user" for profile dropdown */}
      <Navbar
        variant="user"
        onLogout={() => navigate("/loginpage")}
        onOpenModal={() => {}} // no modals needed on this page yet
      />

      {/* Placeholder content */}
      <div className="admin-empty-page__content">
        <span className="admin-empty-page__icon">📋</span>
        <span className="admin-empty-page__label">Transaction History</span>
        <span style={{ fontSize: 13, color: "#bbb" }}>This page is under construction.</span>
        <button className="admin-empty-page__back" onClick={() => navigate("/userdashboard")}>
          ← Back to Dashboard
        </button>
      </div>

    </div>
  );
}

export default UserViewTransHistory;
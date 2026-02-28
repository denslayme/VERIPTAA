// ============================================================
// UserInitiatePayment.jsx — Placeholder Page
// pages/UserInitiatePayment.jsx
//
// Route: /usrinitiatepayment
// Navigated to from: UserDashboard → "Initiate payment" card
//
// Build out this page when you're ready to implement
// the payment initiation flow.
// ============================================================

import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/NavBar';
import "../styles/Dashboards.css";

function UserInitiatePayment() {
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
        <span className="admin-empty-page__icon">💳</span>
        <span className="admin-empty-page__label">Initiate Payment</span>
        <span style={{ fontSize: 13, color: "#bbb" }}>This page is under construction.</span>
        <button className="admin-empty-page__back" onClick={() => navigate("/userdashboard")}>
          ← Back to Dashboard
        </button>
      </div>

    </div>
  );
}

export default UserInitiatePayment;
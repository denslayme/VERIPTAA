// ============================================================
// AdminDashboard.jsx — Admin-facing Dashboard
// pages/AdminDashboard.jsx
//
// Sections:
//  1. Imports
//  2. Mock stats data  (replace with real API later)
//  3. AdminDashboard   main component (default export)
// ============================================================

// ── 1. IMPORTS ───────────────────────────────────────────────
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/NavBar';       // reusable navbar component
import "../styles/Dashboards.css";

// ── 2. MOCK STATS DATA ────────────────────────────────────────
// Replace with real API data when ready
const mockStats = {
  totalSubmissions: 12,
  pendingReview:    15,
  verified:        250,
};

// ── 3. MAIN COMPONENT: AdminDashboard ────────────────────────
function AdminDashboard() {
  const navigate = useNavigate();

  const handleLogout = () => navigate("/loginpage");

  return (
    <div className="admin-page">

      {/* ── REUSABLE NAVBAR ──────────────────────────────────
          variant="admin" shows only the logout icon (no profile dropdown). */}
      <Navbar
        variant="admin"
        onLogout={handleLogout}
      />

      {/* ── PAGE BODY ────────────────────────────────────── */}
      <div className="admin-body">

        {/* Welcome heading */}
        <h1 className="admin-welcome">Welcome, ADMIN!</h1>

        {/* Stats row — number on top, label below
            Replace mockStats with real API values when ready */}
        <div className="admin-stats-row">

          {/* Stat: Total Submissions */}
          <div className="admin-stat-card">
            <div className="admin-stat-card__value">{mockStats.totalSubmissions}</div>
            <div className="admin-stat-card__label">Total Submissions</div>
          </div>

          {/* Stat: Pending Review */}
          <div className="admin-stat-card">
            <div className="admin-stat-card__value">{mockStats.pendingReview}</div>
            <div className="admin-stat-card__label">Pending Review</div>
          </div>

          {/* Stat: Verified */}
          <div className="admin-stat-card">
            <div className="admin-stat-card__value">{mockStats.verified}</div>
            <div className="admin-stat-card__label">Verified</div>
          </div>

        </div>

        {/* Quick Actions — each row navigates to its own page */}
        <h2 className="admin-section-title">Quick Actions</h2>
        <div className="admin-quick-actions">

          {/* Action 1: Upload Transaction History */}
          <div className="admin-quick-action-item" onClick={() => navigate("/admin/upload-transactions")}>
            <span className="admin-quick-action-item__icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <polyline points="16 16 12 12 8 16" />
                <line x1="12" y1="12" x2="12" y2="21" />
                <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3" />
              </svg>
            </span>
            <div className="admin-quick-action-item__text">
              <span className="admin-quick-action-item__title">Upload Transaction History</span>
              <span className="admin-quick-action-item__sub">Import bank transaction records</span>
            </div>
          </div>

          {/* Action 2: Review Submissions */}
          <div className="admin-quick-action-item" onClick={() => navigate("/admin/review-submissions")}>
            <span className="admin-quick-action-item__icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="8" y1="13" x2="16" y2="13" />
                <line x1="8" y1="17" x2="12" y2="17" />
              </svg>
            </span>
            <div className="admin-quick-action-item__text">
              <span className="admin-quick-action-item__title">Review Submissions</span>
              <span className="admin-quick-action-item__sub">Verify pending payments</span>
            </div>
          </div>

          {/* Action 3: View Reports */}
          <div className="admin-quick-action-item" onClick={() => navigate("/admin/reports")}>
            <span className="admin-quick-action-item__icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <line x1="18" y1="20" x2="18" y2="10" />
                <line x1="12" y1="20" x2="12" y2="4" />
                <line x1="6"  y1="20" x2="6"  y2="14" />
                <line x1="2"  y1="20" x2="22" y2="20" />
              </svg>
            </span>
            <div className="admin-quick-action-item__text">
              <span className="admin-quick-action-item__title">View Reports</span>
              <span className="admin-quick-action-item__sub">View and download verification reports</span>
            </div>
          </div>

        </div>
      </div>{/* end .admin-body */}

    </div>
  );
}

export default AdminDashboard;
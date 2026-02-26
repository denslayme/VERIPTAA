// ============================================================
//  - Quick Actions list — each navigates to its own page:
//      /admin/upload-transactions
//      /admin/review-submissions
//      /admin/reports
//  - The sub-pages (UploadTransactions, ReviewSubmissions,
//    ViewReports) are defined below as empty placeholder
//    components. Move them to their own files when ready.
// ============================================================

import { useNavigate, Routes, Route } from "react-router-dom";
import "../styles/Dashboards.css";

// ── MOCK STATS DATA ────────────────────────────────────────
// Replace with real API data when ready
const mockStats = {
  totalSubmissions: 12,
  pendingReview:    15,
  verified:        250,
};

// Placeholder page: Upload Transaction History
function UploadTransactionsPage() {
  const navigate = useNavigate();
  return (
    <div className="admin-empty-page">
      {/* Reuse same navbar for consistency */}
      <AdminNavbar />
      <div className="admin-empty-page__content">
        <span className="admin-empty-page__icon">📤</span>
        <span className="admin-empty-page__label">Upload Transaction History</span>
        <span style={{ fontSize: 13, color: "#bbb" }}>This page is under construction.</span>
        <button className="admin-empty-page__back" onClick={() => navigate("/admin")}>
          ← Back to Dashboard
        </button>
      </div>
    </div>
  );
}

// Placeholder page: Review Submissions
function ReviewSubmissionsPage() {
  const navigate = useNavigate();
  return (
    <div className="admin-empty-page">
      <AdminNavbar />
      <div className="admin-empty-page__content">
        <span className="admin-empty-page__icon">📋</span>
        <span className="admin-empty-page__label">Review Submissions</span>
        <span style={{ fontSize: 13, color: "#bbb" }}>This page is under construction.</span>
        <button className="admin-empty-page__back" onClick={() => navigate("/admin")}>
          ← Back to Dashboard
        </button>
      </div>
    </div>
  );
}

// Placeholder page: View Reports
function ViewReportsPage() {
  const navigate = useNavigate();
  return (
    <div className="admin-empty-page">
      <AdminNavbar />
      <div className="admin-empty-page__content">
        <span className="admin-empty-page__icon">📊</span>
        <span className="admin-empty-page__label">View Reports</span>
        <span style={{ fontSize: 13, color: "#bbb" }}>This page is under construction.</span>
        <button className="admin-empty-page__back" onClick={() => navigate("/admin")}>
          ← Back to Dashboard
        </button>
      </div>
    </div>
  );
}

// Shared Admin Navbar
// (Used by main dashboard + all sub-pages for consistency)
function AdminNavbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // TODO: clear admin session/token, then redirect
    navigate("/login");
  };

  return (
    <nav className="admin-navbar">
      {/* Logo */}
      <span className="admin-navbar__logo">VeriPTA</span>

      {/* Logout icon */}
      <button
        className="admin-navbar__logout-btn"
        onClick={handleLogout}
        title="Logout"
      >
        {/* Logout arrow SVG (matches screenshot) */}
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
          <polyline points="16 17 21 12 16 7" />
          <line x1="21" y1="12" x2="9" y2="12" />
        </svg>
      </button>
    </nav>
  );
}

// Main Component: AdminDashboard
export default function AdminDashboard() {
  const navigate = useNavigate();

  return (
    <div className="admin-page">

      {/* ── NAVBAR ───────────────────────────────────────── */}
      <AdminNavbar />

      {/* ── PAGE BODY ────────────────────────────────────── */}
      <div className="admin-body">

        {/* ── Welcome heading ── */}
        <h1 className="admin-welcome">Welcome, ADMIN!</h1>

        {/* ── Stats row ──
            Replace mockStats values with real API data. */}
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

        {/* ── Quick Actions ──
            Each item navigates to a separate page when clicked. */}
        <h2 className="admin-section-title">Quick Actions</h2>
        <div className="admin-quick-actions">

          {/* Action 1: Upload Transaction History */}
          <div
            className="admin-quick-action-item"
            onClick={() => navigate("/admin/upload-transactions")}
          >
            <span className="admin-quick-action-item__icon">
              {/* Upload SVG icon */}
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
          <div
            className="admin-quick-action-item"
            onClick={() => navigate("/admin/review-submissions")}
          >
            <span className="admin-quick-action-item__icon">
              {/* Document SVG icon */}
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
          <div
            className="admin-quick-action-item"
            onClick={() => navigate("/admin/reports")}
          >
            <span className="admin-quick-action-item__icon">
              {/* Bar chart SVG icon */}
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

// ============================================================
// Admin Routes export
// Add these inside your main <Routes> in App.jsx:
//
//   <Route path="/admin"                        element={<AdminDashboard />} />
//   <Route path="/admin/upload-transactions"    element={<UploadTransactionsPage />} />
//   <Route path="/admin/review-submissions"     element={<ReviewSubmissionsPage />} />
//   <Route path="/admin/reports"                element={<ViewReportsPage />} />
//
// ============================================================
export { UploadTransactionsPage, ReviewSubmissionsPage, ViewReportsPage };
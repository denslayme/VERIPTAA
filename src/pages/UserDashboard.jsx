// Sections:
//  1. Imports
//  2. Mock data        (replace with real API/context later)
//  3. ChangePasswordModal   sub-component
//  4. UpdateEmailModal      sub-component
//  5. UpdatePhoneModal      sub-component
//  6. UserDashboard         main component (default export)
// ============================================================

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/NavBar';       // reusable navbar component
import "../styles/Dashboards.css";

// ── 2. MOCK DATA ─────────────────────────────────────────────
// Replace mockUserData with your real auth context / API later.
// fullName and idNumber will auto-display once connected.
const mockUserData = {
  fullName: "Maria Santos",
  idNumber: "2023-0001",
};

// Recent Payments list — display only, not interactive
// Replace with real API data when ready
const mockRecentPayments = [
  { id: 1, title: "PTA Insurance and membership fee", date: "Dec. 02, 2025 | 1:25 PM",  amount: -400 },
  { id: 2, title: "PTA Membership fee only",          date: "Nov. 30, 2025 | 2:05 PM",  amount: -200 },
  { id: 3, title: "PTA Membership fee only",          date: "Nov. 29, 2024 | 10:25 AM", amount: -200 },
];

// ── 3. SUB-COMPONENT: Change Password Modal ──────────────────
function ChangePasswordModal({ onClose }) {
  const [form, setForm]       = useState({ current: "", newPass: "", confirm: "" });
  const [message, setMessage] = useState(null); // { type: "success" | "error", text }

  const handleSubmit = () => {
    if (!form.current || !form.newPass || !form.confirm) {
      setMessage({ type: "error", text: "All fields are required." });
      return;
    }
    if (form.newPass !== form.confirm) {
      setMessage({ type: "error", text: "New passwords do not match." });
      return;
    }
    // TODO: replace with real API call
    setMessage({ type: "success", text: "Password updated successfully." });
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>

        <div className="modal-header">
          <span className="modal-title">Change Password</span>
          <button className="modal-close-btn" onClick={onClose}>×</button>
        </div>

        <div className="modal-field">
          <label className="modal-label">Current Password</label>
          <input className="modal-input" type="password" placeholder="Enter current password"
            value={form.current} onChange={(e) => setForm({ ...form, current: e.target.value })} />
        </div>

        <div className="modal-field">
          <label className="modal-label">New Password</label>
          <input className="modal-input" type="password" placeholder="Enter new password"
            value={form.newPass} onChange={(e) => setForm({ ...form, newPass: e.target.value })} />
        </div>

        <div className="modal-field">
          <label className="modal-label">Confirm New Password</label>
          <input className="modal-input" type="password" placeholder="Re-enter new password"
            value={form.confirm} onChange={(e) => setForm({ ...form, confirm: e.target.value })} />
        </div>

        {message && (
          <div className={`modal-message modal-message--${message.type}`}>{message.text}</div>
        )}

        <button className="modal-submit-btn" onClick={handleSubmit}>Save Changes</button>

      </div>
    </div>
  );
}

// ── 4. SUB-COMPONENT: Update Email Modal ─────────────────────
function UpdateEmailModal({ onClose }) {
  const [form, setForm]       = useState({ email: "", confirmEmail: "" });
  const [message, setMessage] = useState(null);

  const handleSubmit = () => {
    if (!form.email || !form.confirmEmail) {
      setMessage({ type: "error", text: "All fields are required." });
      return;
    }
    if (form.email !== form.confirmEmail) {
      setMessage({ type: "error", text: "Email addresses do not match." });
      return;
    }
    // TODO: replace with real API call
    setMessage({ type: "success", text: "Email updated successfully." });
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>

        <div className="modal-header">
          <span className="modal-title">Update Email</span>
          <button className="modal-close-btn" onClick={onClose}>×</button>
        </div>

        <div className="modal-field">
          <label className="modal-label">New Email Address</label>
          <input className="modal-input" type="email" placeholder="Enter new email"
            value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
        </div>

        <div className="modal-field">
          <label className="modal-label">Confirm New Email</label>
          <input className="modal-input" type="email" placeholder="Re-enter new email"
            value={form.confirmEmail} onChange={(e) => setForm({ ...form, confirmEmail: e.target.value })} />
        </div>

        {message && (
          <div className={`modal-message modal-message--${message.type}`}>{message.text}</div>
        )}

        <button className="modal-submit-btn" onClick={handleSubmit}>Save Changes</button>

      </div>
    </div>
  );
}

// ── 5. SUB-COMPONENT: Update Phone Number Modal ──────────────
function UpdatePhoneModal({ onClose }) {
  const [form, setForm]       = useState({ phone: "" });
  const [message, setMessage] = useState(null);

  const handleSubmit = () => {
    if (!form.phone) {
      setMessage({ type: "error", text: "Phone number is required." });
      return;
    }
    // TODO: replace with real API call
    setMessage({ type: "success", text: "Phone number updated successfully." });
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>

        <div className="modal-header">
          <span className="modal-title">Update Phone Number</span>
          <button className="modal-close-btn" onClick={onClose}>×</button>
        </div>

        <div className="modal-field">
          <label className="modal-label">New Phone Number</label>
          <input className="modal-input" type="tel" placeholder="e.g. 09xxxxxxxxx"
            value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
        </div>

        {message && (
          <div className={`modal-message modal-message--${message.type}`}>{message.text}</div>
        )}

        <button className="modal-submit-btn" onClick={handleSubmit}>Save Changes</button>

      </div>
    </div>
  );
}

// ── 6. MAIN COMPONENT: UserDashboard ─────────────────────────
function UserDashboard() {
  const navigate = useNavigate();

  // Tracks which modal is open: "password" | "email" | "phone" | null
  const [activeModal, setActiveModal] = useState(null);

  // Pull user data — swap with real auth context/API when ready
  const { fullName, idNumber } = mockUserData;

  // Passed to Navbar — called when a dropdown item is clicked
  const handleOpenModal  = (modalName) => setActiveModal(modalName);
  const handleCloseModal = ()          => setActiveModal(null);
  const handleLogout     = ()          => navigate("/loginpage");

  return (
    <div className="user-page">

      {/* ── REUSABLE NAVBAR ──────────────────────────────────
          variant="user" shows the profile icon + dropdown.
          onOpenModal is triggered by dropdown item clicks inside Navbar. */}
      <Navbar
        variant="user"
        onLogout={handleLogout}
        onOpenModal={handleOpenModal}
      />

      {/* ── PAGE BODY ────────────────────────────────────── */}
      <div className="user-body">

        {/* Student Full Name & ID Number
            Sourced from mockUserData — replace with real data to auto-update */}
        <div className="user-info-row">
          <div className="user-info-row__item">
            <span className="user-info-row__label">Full Name :</span>
            <span className="user-info-row__value">{fullName || "—"}</span>
          </div>
          <div className="user-info-row__item">
            <span className="user-info-row__label">ID Number :</span>
            <span className="user-info-row__value">{idNumber || "—"}</span>
          </div>
        </div>

        {/* Quick Actions */}
        <h2 className="user-section-title">Quick Actions</h2>
        <div className="user-quick-actions">

          {/* Card: Initiate Payment → /usrinitiatepayment (matches App.jsx route) */}
          <div className="user-quick-action-card" onClick={() => navigate("/usrinitiatepayment")}>
            <span className="user-quick-action-card__icon">
              <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
                <rect x="2" y="6" width="20" height="12" rx="2" />
                <circle cx="12" cy="12" r="3" />
                <path d="M6 12h.01M18 12h.01" />
              </svg>
            </span>
            <span className="user-quick-action-card__label">Initiate payment</span>
          </div>

          {/* Card: View Payment History → /usrviewtransactionhistory (matches App.jsx route) */}
          <div className="user-quick-action-card" onClick={() => navigate("/usrviewtranshistory")}>
            <span className="user-quick-action-card__icon">
              <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="8" y1="13" x2="16" y2="13" />
                <line x1="8" y1="17" x2="12" y2="17" />
              </svg>
            </span>
            <span className="user-quick-action-card__label">View payment history</span>
          </div>

        </div>

        {/* Recent Payments — display only, not interactive */}
        <h2 className="user-section-title">Recent Payments</h2>
        <div className="user-recent-payments">
          {mockRecentPayments.map((payment) => (
            <div key={payment.id} className="user-payment-item">
              <div className="user-payment-item__left">
                <span className="user-payment-item__title">{payment.title}</span>
                <span className="user-payment-item__date">{payment.date}</span>
              </div>
              <span className="user-payment-item__amount">
                -{"\u20B1"}{Math.abs(payment.amount).toFixed(2)}
              </span>
            </div>
          ))}
        </div>

      </div>{/* end .user-body */}

      {/* ── MODALS — shown based on activeModal state ─────── */}
      {activeModal === "password" && <ChangePasswordModal onClose={handleCloseModal} />}
      {activeModal === "email"    && <UpdateEmailModal    onClose={handleCloseModal} />}
      {activeModal === "phone"    && <UpdatePhoneModal    onClose={handleCloseModal} />}

    </div>
  );
}

export default UserDashboard;
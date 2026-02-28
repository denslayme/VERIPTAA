// ============================================================
// UserDashboard.jsx — Student-facing Dashboard
// pages/UserDashboard.jsx
//
// Lab criteria checklist (where each is satisfied):
//
// ✓ Lab 4: Controlled inputs with useState
//     → form state in ChangePasswordModal, UpdateEmailModal,
//       UpdatePhoneModal (e.g. const [form, setForm] = useState(...))
//
// ✓ Lab 4: Form handling with handleSubmit
//     → handleSubmit() inside each modal sub-component
//
// ✓ Lab 4: Navigation using useNavigate
//     → handleLogout() → navigate("/loginpage")
//     → Quick Action cards → navigate("/usrinitiatepayment"), etc.
//
// ✓ Lab 4: Visible UI updates from state
//     → dropdownOpen state shows/hides the profile dropdown
//     → activeModal state shows/hides modal components
//     → message state shows success/error text inside modals
//
// ✓ Lab 5: Accessible form inputs (htmlFor / id)
//     → Every <label> has htmlFor matching its <input>'s id
//       See all modal sub-components below
// ============================================================

// ── IMPORTS ──────────────────────────────────────────────────
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/NavBar';
import "../styles/Dashboards.css";

// ── MOCK DATA ─────────────────────────────────────────────────
// Replace with real auth context / API response later
const mockUserData = {
  fullName: "Maria Santos",
  idNumber: "2023-0001",
};

// Recent Payments — display only, not interactive
const mockRecentPayments = [
  { id: 1, title: "PTA Insurance and membership fee", date: "Dec. 02, 2025 | 1:25 PM",  amount: -400 },
  { id: 2, title: "PTA Membership fee only",          date: "Nov. 30, 2025 | 2:05 PM",  amount: -200 },
  { id: 3, title: "PTA Membership fee only",          date: "Nov. 29, 2024 | 10:25 AM", amount: -200 },
];

// ── SUB-COMPONENT: Change Password Modal ─────────────────────
// Lab 4: Controlled inputs with useState — form state controls all inputs
// Lab 4: Form handling with handleSubmit — validates and processes form
// Lab 5: Accessible form inputs — every label has htmlFor matching input id
function ChangePasswordModal({ onClose }) {
  const [form, setForm]       = useState({ current: "", newPass: "", confirm: "" });
  const [message, setMessage] = useState(null); // { type: "success"|"error", text }

  // Lab 4: handleSubmit — validates inputs, shows visible feedback
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

        {/* Lab 5: htmlFor="current-password" matches id="current-password" */}
        <div className="modal-field">
          <label className="modal-label" htmlFor="current-password">Current Password</label>
          <input
            className="modal-input"
            id="current-password"
            type="password"
            placeholder="Enter current password"
            value={form.current}
            onChange={(e) => setForm({ ...form, current: e.target.value })}
          />
        </div>

        {/* Lab 5: htmlFor="new-password" matches id="new-password" */}
        <div className="modal-field">
          <label className="modal-label" htmlFor="new-password">New Password</label>
          <input
            className="modal-input"
            id="new-password"
            type="password"
            placeholder="Enter new password"
            value={form.newPass}
            onChange={(e) => setForm({ ...form, newPass: e.target.value })}
          />
        </div>

        {/* Lab 5: htmlFor="confirm-password" matches id="confirm-password" */}
        <div className="modal-field">
          <label className="modal-label" htmlFor="confirm-password">Confirm New Password</label>
          <input
            className="modal-input"
            id="confirm-password"
            type="password"
            placeholder="Re-enter new password"
            value={form.confirm}
            onChange={(e) => setForm({ ...form, confirm: e.target.value })}
          />
        </div>

        {/* Lab 4: Visible UI update from state — message appears after submit */}
        {message && (
          <div className={`modal-message modal-message--${message.type}`}>{message.text}</div>
        )}

        <button className="modal-submit-btn" onClick={handleSubmit}>Save Changes</button>

      </div>
    </div>
  );
}

// ── SUB-COMPONENT: Update Email Modal ────────────────────────
// Lab 4: Controlled inputs with useState
// Lab 4: Form handling with handleSubmit
// Lab 5: Accessible form inputs (htmlFor / id)
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

        {/* Lab 5: htmlFor="new-email" matches id="new-email" */}
        <div className="modal-field">
          <label className="modal-label" htmlFor="new-email">New Email Address</label>
          <input
            className="modal-input"
            id="new-email"
            type="email"
            placeholder="Enter new email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
        </div>

        {/* Lab 5: htmlFor="confirm-email" matches id="confirm-email" */}
        <div className="modal-field">
          <label className="modal-label" htmlFor="confirm-email">Confirm New Email</label>
          <input
            className="modal-input"
            id="confirm-email"
            type="email"
            placeholder="Re-enter new email"
            value={form.confirmEmail}
            onChange={(e) => setForm({ ...form, confirmEmail: e.target.value })}
          />
        </div>

        {message && (
          <div className={`modal-message modal-message--${message.type}`}>{message.text}</div>
        )}

        <button className="modal-submit-btn" onClick={handleSubmit}>Save Changes</button>

      </div>
    </div>
  );
}

// ── SUB-COMPONENT: Update Phone Number Modal ─────────────────
// Lab 4: Controlled inputs with useState
// Lab 4: Form handling with handleSubmit
// Lab 5: Accessible form inputs (htmlFor / id)
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

        {/* Lab 5: htmlFor="new-phone" matches id="new-phone" */}
        <div className="modal-field">
          <label className="modal-label" htmlFor="new-phone">New Phone Number</label>
          <input
            className="modal-input"
            id="new-phone"
            type="tel"
            placeholder="e.g. 09xxxxxxxxx"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
          />
        </div>

        {message && (
          <div className={`modal-message modal-message--${message.type}`}>{message.text}</div>
        )}

        <button className="modal-submit-btn" onClick={handleSubmit}>Save Changes</button>

      </div>
    </div>
  );
}

// ── MAIN COMPONENT: UserDashboard ────────────────────────────
function UserDashboard() {
  // Lab 4: Navigation using useNavigate
  const navigate = useNavigate();

  // Lab 4: Visible UI updates from state
  // activeModal controls which modal is shown (or none)
  const [activeModal, setActiveModal] = useState(null); // "password" | "email" | "phone" | null

  const { fullName, idNumber } = mockUserData;

  const handleOpenModal  = (modalName) => setActiveModal(modalName);
  const handleCloseModal = ()          => setActiveModal(null);

  // Lab 4: Navigation using useNavigate
  const handleLogout = () => navigate("/loginpage");

  return (
    <div className="user-page">

      {/* Reusable Navbar component (variant="user" enables profile dropdown) */}
      <Navbar
        variant="user"
        onLogout={handleLogout}
        onOpenModal={handleOpenModal}
      />

      <div className="user-body">

        {/* Student info — sourced from mockUserData */}
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

        {/* Quick Actions
            CSS: .user-quick-actions uses display: grid (2 columns)
            Lab 4: navigate() called on card click */}
        <h2 className="user-section-title">Quick Actions</h2>
        <div className="user-quick-actions">

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

      </div>

      {/* Lab 4: Visible UI updates — modals appear/disappear based on activeModal state */}
      {activeModal === "password" && <ChangePasswordModal onClose={handleCloseModal} />}
      {activeModal === "email"    && <UpdateEmailModal    onClose={handleCloseModal} />}
      {activeModal === "phone"    && <UpdatePhoneModal    onClose={handleCloseModal} />}

    </div>
  );
}

export default UserDashboard;
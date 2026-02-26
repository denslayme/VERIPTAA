import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/Dashboards.css";

// ── 2. MOCK DATA ─────────────────────────────────────────────
// Replace with your actual auth context / API response later.
// Both fullName and idNumber will auto-display once connected.
const mockUserData = {
  fullName: "Maria Santos",
  idNumber: "2023-0001",
};

// Replace with API data when ready
const mockRecentPayments = [
  { id: 1, title: "PTA Insurance and membership fee", date: "Dec. 02, 2025 | 1:25 PM",  amount: -400 },
  { id: 2, title: "PTA Membership fee only",          date: "Nov. 30, 2025 | 2:05 PM",  amount: -200 },
  { id: 3, title: "PTA Membership fee only",          date: "Nov. 29, 2024 | 10:25 AM", amount: -200 },
];

// ── 3. SUB-COMPONENT: Change Password Modal ──────────────────
function ChangePasswordModal({ onClose }) {
  const [form, setForm]       = useState({ current: "", newPass: "", confirm: "" });
  const [message, setMessage] = useState(null); // { type: "success"|"error", text }

  const handleSubmit = () => {
    if (!form.current || !form.newPass || !form.confirm) {
      setMessage({ type: "error", text: "All fields are required." });
      return;
    }
    if (form.newPass !== form.confirm) {
      setMessage({ type: "error", text: "New passwords do not match." });
      return;
    }
    // TO DO: wire up real API call here
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
          <input
            className="modal-input"
            type="password"
            placeholder="Enter current password"
            value={form.current}
            onChange={(e) => setForm({ ...form, current: e.target.value })}
          />
        </div>

        <div className="modal-field">
          <label className="modal-label">New Password</label>
          <input
            className="modal-input"
            type="password"
            placeholder="Enter new password"
            value={form.newPass}
            onChange={(e) => setForm({ ...form, newPass: e.target.value })}
          />
        </div>

        <div className="modal-field">
          <label className="modal-label">Confirm New Password</label>
          <input
            className="modal-input"
            type="password"
            placeholder="Re-enter new password"
            value={form.confirm}
            onChange={(e) => setForm({ ...form, confirm: e.target.value })}
          />
        </div>

        {message && (
          <div className={`modal-message modal-message--${message.type}`}>
            {message.text}
          </div>
        )}

        <button className="modal-submit-btn" onClick={handleSubmit}>
          Save Changes
        </button>

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
    // TODO: wire up real API call here
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
          <input
            className="modal-input"
            type="email"
            placeholder="Enter new email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
        </div>

        <div className="modal-field">
          <label className="modal-label">Confirm New Email</label>
          <input
            className="modal-input"
            type="email"
            placeholder="Re-enter new email"
            value={form.confirmEmail}
            onChange={(e) => setForm({ ...form, confirmEmail: e.target.value })}
          />
        </div>

        {message && (
          <div className={`modal-message modal-message--${message.type}`}>
            {message.text}
          </div>
        )}

        <button className="modal-submit-btn" onClick={handleSubmit}>
          Save Changes
        </button>

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
    // TODO: wire up real API call here
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
          <input
            className="modal-input"
            type="tel"
            placeholder="e.g. 09xxxxxxxxx"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
          />
        </div>

        {message && (
          <div className={`modal-message modal-message--${message.type}`}>
            {message.text}
          </div>
        )}

        <button className="modal-submit-btn" onClick={handleSubmit}>
          Save Changes
        </button>

      </div>
    </div>
  );
}

// ── 6. MAIN COMPONENT: UserDashboard ─────────────────────────
function UserDashboard() {
  const navigate = useNavigate();

  // UI state
  const [dropdownOpen, setDropdownOpen] = useState(false); // controls profile dropdown visibility
  const [activeModal, setActiveModal]   = useState(null);  // "password" | "email" | "phone" | null

  // Pull user data — swap mockUserData with real auth context/API later
  const { fullName, idNumber } = mockUserData;

  // Handlers
  const openModal  = (modal) => { setActiveModal(modal); setDropdownOpen(false); };
  const closeModal = ()      => setActiveModal(null);

  const handleLogout = () => {
    // TODO: clear auth token / session, then redirect
    navigate("/login");
  };

  return (
    <div className="user-page">

      {/* ── NAVBAR ───────────────────────────────────────── */}
      <nav className="user-navbar">

        <span className="user-navbar__logo">VeriPTA</span>

        <div className="user-navbar__actions">

          {/* Profile icon button — toggles dropdown */}
          <button
            className="user-navbar__icon-btn"
            onClick={() => setDropdownOpen((prev) => !prev)}
            title="Profile settings"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <circle cx="12" cy="8" r="4" />
              <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
            </svg>
          </button>

          {/* Profile dropdown menu */}
          {dropdownOpen && (
            <div className="user-profile-dropdown">
              <div className="user-profile-dropdown__item" onClick={() => openModal("password")}>
                <span>🔒</span> Change Password
              </div>
              <div className="user-profile-dropdown__item" onClick={() => openModal("email")}>
                <span>✉️</span> Update Email
              </div>
              <div className="user-profile-dropdown__item" onClick={() => openModal("phone")}>
                <span>📱</span> Update Phone Num
              </div>
            </div>
          )}

          {/* Logout icon button */}
          <button
            className="user-navbar__icon-btn"
            onClick={handleLogout}
            title="Logout"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
              <polyline points="16 17 21 12 16 7" />
              <line x1="21" y1="12" x2="9" y2="12" />
            </svg>
          </button>

        </div>
      </nav>

      {/* ── PAGE BODY ────────────────────────────────────── */}
      <div className="user-body">

        {/* Full Name & ID Number
            Values come from mockUserData — replace with real data source to auto-update */}
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

          {/* Card: Initiate Payment */}
          <div className="user-quick-action-card" onClick={() => navigate("/user/initiate-payment")}>
            <span className="user-quick-action-card__icon">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="2" y="6" width="20" height="12" rx="2" />
                <circle cx="12" cy="12" r="3" />
                <path d="M6 12h.01M18 12h.01" />
              </svg>
            </span>
            <span className="user-quick-action-card__label">Initiate payment</span>
          </div>

          {/* Card: View Payment History */}
          <div className="user-quick-action-card" onClick={() => navigate("/user/payment-history")}>
            <span className="user-quick-action-card__icon">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
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

      {/* ── MODALS — rendered based on activeModal state ── */}
      {activeModal === "password" && <ChangePasswordModal onClose={closeModal} />}
      {activeModal === "email"    && <UpdateEmailModal    onClose={closeModal} />}
      {activeModal === "phone"    && <UpdatePhoneModal    onClose={closeModal} />}

    </div>
  );
}

export default UserDashboard;
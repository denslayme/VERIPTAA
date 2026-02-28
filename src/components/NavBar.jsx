// ============================================================
// Navbar.jsx — Reusable Navigation Bar Component
// components/Navbar.jsx
//
// Used by: UserDashboard, AdminDashboard, and their sub-pages
//
// Props:
//   variant       — "user" | "admin"
//                   controls which icons/features are shown
//   onLogout      — function to call when logout icon is clicked
//   onOpenModal   — (user only) function(modalName) called when
//                   a dropdown item is clicked
//                   modalName: "password" | "email" | "phone"
// ============================================================

import React, { useState } from 'react';
import "../styles/Dashboards.css";

function NavBar({ variant = "user", onLogout, onOpenModal }) {

  // ── Dropdown state (only relevant for user variant) ───────
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // ── Close dropdown when a modal item is clicked ───────────
  const handleDropdownItem = (modalName) => {
    setDropdownOpen(false);
    if (onOpenModal) onOpenModal(modalName);
  };

  return (
    <nav className="navbar">

      {/* ── Logo (same for both variants) ── */}
      <span className="navbar__logo">VeriPTA</span>

      {/* ── Right side icons ── */}
      <div className="navbar__actions">

        {/* ── USER VARIANT: profile icon + dropdown ── */}
        {variant === "user" && (
          <>
            {/* Profile icon button — toggles dropdown */}
            <button
              className="navbar__icon-btn"
              onClick={() => setDropdownOpen((prev) => !prev)}
              title="Profile settings"
            >
              {/* Person SVG icon */}
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <circle cx="12" cy="8" r="4" />
                <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
              </svg>
            </button>

            {/* Profile dropdown — Change Password / Update Email / Update Phone */}
            {dropdownOpen && (
              <div className="navbar__dropdown">
                <div className="navbar__dropdown-item" onClick={() => handleDropdownItem("password")}>
                  <span>🔒</span> Change Password
                </div>
                <div className="navbar__dropdown-item" onClick={() => handleDropdownItem("email")}>
                  <span>✉️</span> Update Email
                </div>
                <div className="navbar__dropdown-item" onClick={() => handleDropdownItem("phone")}>
                  <span>📱</span> Update Phone Num
                </div>
              </div>
            )}
          </>
        )}

        {/* ── LOGOUT ICON (both variants) ── */}
        <button
          className="navbar__icon-btn"
          onClick={onLogout}
          title="Logout"
        >
          {/* Logout arrow SVG icon */}
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
            <polyline points="16 17 21 12 16 7" />
            <line x1="21" y1="12" x2="9" y2="12" />
          </svg>
        </button>

      </div>
    </nav>
  );
}

export default NavBar;
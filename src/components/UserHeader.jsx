// ============================================================
// UserHeader.jsx
// Reusable Header for User Pages (SVG Version)
// ============================================================

import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/UserHeader.css";

const UserHeader = ({ title }) => {
  const navigate = useNavigate();

  return (
    <div className="user-header">

      {/* Left: Back Button */}
      <div className="left-section">
        <button className="icon-btn" onClick={() => navigate(-1)}>
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
      </div>

      {/* Center: Title */}
      <h3 className="header-title">{title}</h3>

      {/* Right: Home Button */}
      <button
        className="icon-btn"
        onClick={() => navigate("/UserDashboard")}
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <path d="M3 10.5L12 3l9 7.5" />
          <path d="M5 10v10h14V10" />
        </svg>
      </button>

    </div>
  );
};

export default UserHeader;
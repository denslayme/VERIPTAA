// ============================================================
// AdminTransactionUpload.jsx
// Admin uploads official bank transaction history (PDF)
// ============================================================

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminHeader from "../../components/AdminHeader";
import "../../styles/FileSubmission.css";

const AdminTransactionUpload = () => {
  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState(null);
  const [error, setError] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    // Validate file type
    if (file.type !== "application/pdf") {
      setError("Only PDF files are allowed.");
      setSelectedFile(null);
      return;
    }

    // Validate size (500MB max)
    if (file.size > 500 * 1024 * 1024) {
      setError("File size must not exceed 500MB.");
      setSelectedFile(null);
      return;
    }

    setError("");
    setSelectedFile(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    /*if (!selectedFile) {
      setError("Please upload a transaction history PDF.");
      return;
    }*/

    // For now, we just navigate to results page
    // Later, this is where you'll upload to backend
    navigate("/adminresults");
  };

  return (
    <div>
      <AdminHeader title="Transaction History Submission" />

      <div className="upload-container">
        <h2 className="page-title">Transaction History Submission</h2>
        <p className="page-subtitle">
          Upload official bank transaction history (PDF format).
        </p>

        <form className="upload-card" onSubmit={handleSubmit}>
          <label className="upload-box">
            <input
              type="file"
              accept="application/pdf"
              onChange={handleFileChange}
              hidden
            />

            <div className="upload-content">
              <div className="upload-icon">📄</div>
              {selectedFile ? (
                <p className="file-name">{selectedFile.name}</p>
              ) : (
                <>
                  <p>Select your file or click to upload</p>
                  <span>PDF up to 50MB</span>
                </>
              )}
            </div>
          </label>

          {error && <p className="error-text">{error}</p>}

          <button type="submit" className="submit-btn">
            Submit Transaction History
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminTransactionUpload;
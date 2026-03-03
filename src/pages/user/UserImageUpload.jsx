// ============================================================
// UserImageUpload.jsx
// User uploads official payment receipt (PNG/JPEG)
// ============================================================

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserHeader from "../../components/UserHeader";
import "../../styles/ImageSubmission.css";

const UserImageUpload = () => {
  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [reference, setReference] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");


  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    // Validate file type
    if (file.type !== "image/png" && file.type !== "image/jpeg") {
      setError("Only PNG and JPEG files are allowed.");
      setSelectedFile(null);
      return;
    }

    // Validate size (50MB max)
    if (file.size > 50 * 1024 * 1024) {
      setError("File size must not exceed 50MB.");
      setSelectedFile(null);
      return;
    }

    setError("");
    setSelectedFile(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!selectedFile) {
      setError("Please upload a payment receipt.");
      return;
    }

    // For now, we just navigate to submission page
    // Later, this is where you'll upload to backend
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      navigate("/userviewsubhistory");
    }, 1500);
  };

  return (
    <div>
      <UserHeader title="Proof of Payment Submission" />

      <div className="upload-container">
        <h2 className="page-title">Proof of Payment Submission</h2>
        <p className="page-subtitle">
          Upload payment receipt (PNG/JPEG format).
        </p>

        <form className="upload-card" onSubmit={handleSubmit}>
          <label className="upload-box">
            <input
              type="file"
              accept="image/png,image/jpeg"
              onChange={handleFileChange}
              hidden
            />

            <div className="upload-content">
              <div className="upload-icon">📄</div>
              {selectedFile ? (
                <p className="file-name">{selectedFile.name}</p>
              ) : (
                <>
                  <p>Select file or click to upload</p>
                  <span>PNG/JPEG up to 50MB</span>
                </>
              )}
            </div>
          </label>

          {error && <p className="error-text">{error}</p>}

          <div className="payment-details">
            <h2 className="details-title">Payment Details</h2>
            <p className="details-subtitle">
              Please review the extracted payment details carefully and make sure all the information is correct.
            </p>

            <div className="input-group">
              <label className="details-label">Reference Number</label>
              <input
                type="text"
                className="details-input"
                value={reference}
                onChange={(e) => setReference(e.target.value)}
                required
                placeholder="Edit if extracted value is incorrect"
              />
            </div>

            <div className="input-group">
              <label className="details-label">Amount Paid</label>
              <input
                type="number"
                min="0"
                step="0.01"
                className="details-input"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                required
                placeholder="Edit if extracted value is incorrect"
              />
            </div>

            <div className="input-group">
              <label className="details-label">Date Paid</label>
              <input
                type="date"
                className="details-input"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="submit-btn" disabled={loading}>
              {loading ? "Submitting..." : "Submit Proof of Payment"}
            </button>
          </div>
        </form>
      </div>
    </div>

  );
};

export default UserImageUpload;
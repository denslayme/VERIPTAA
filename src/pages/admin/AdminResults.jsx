// ============================================================
// AdminResults.jsx
// Verification Results Page (Improved UI)
// ============================================================

import React, { useState } from "react";
import AdminHeader from "../../components/AdminHeader";
import "../../styles/Results.css";

const mockData = [
  {
    id: "563485874365",
    name: "Carlos, Diwata",
    ref: "4654565476457",
    amount: "300.00",
    date: "12-23-25",
    status: "confirmed",
  },
  {
    id: "565765876876",
    name: "Bituin, Luningning",
    ref: "5475467658887",
    amount: "300.00",
    date: "12-23-25",
    status: "pending",
  },
  {
    id: "98798709809",
    name: "Ligaya, Bayani",
    ref: "576586787698",
    amount: "300.00",
    date: "12-23-25",
    status: "unconfirmed",
  },
];

const AdminResults = () => {
  const [filter, setFilter] = useState("confirmed");
  const [printOpen, setPrintOpen] = useState(false);

  const filteredData =
    filter === "all"
      ? mockData
      : mockData.filter((item) => item.status === filter);

  return (
    <div>
    <AdminHeader title="Verification Results" />
      <div className="results-container">
        <h2 className="page-title">Verification Results</h2>

        {/* Top Controls */}
        <div className="results-controls">
          <div className="status-buttons">
            <button
              className={filter === "confirmed" ? "active" : ""}
              onClick={() => setFilter("confirmed")}
            >
              Confirmed
            </button>

            <button
              className={filter === "pending" ? "active" : ""}
              onClick={() => setFilter("pending")}
            >
              Pending
            </button>

            <button
              className={filter === "unconfirmed" ? "active" : ""}
              onClick={() => setFilter("unconfirmed")}
            >
              Unconfirmed
            </button>
          </div>

          {/* Print Dropdown */}
          <div className="print-dropdown">
            <button onClick={() => setPrintOpen(!printOpen)}>
              Print ▾
            </button>

            {printOpen && (
              <div className="print-menu">
                <div>Print Confirmed</div>
                <div>Print Pending</div>
                <div>Print Unconfirmed</div>
                <div>Print All</div>
              </div>
            )}
          </div>
        </div>

        {/* Results Table */}
        <div className="table-card">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Student Name</th>
                <th>Reference No.</th>
                <th>Amount</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item, index) => (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.ref}</td>
                  <td>{item.amount}</td>
                  <td>{item.date}</td>
                  <td>
                    <span className={`status-badge ${item.status}`}>
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminResults;
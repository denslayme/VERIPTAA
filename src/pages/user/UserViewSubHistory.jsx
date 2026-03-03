import UserHeader from "../../components/UserHeader";
import "../../styles/SubmissionHistory.css";

const mockData = [
  {
    date: "2026-02-23",
    ref: "4654565476457",
    amount: "400.00",
    status: "pending",
  },
  {
    date: "2025-12-10",
    ref: "5475467658027",
    amount: "200.00",
    status: "confirmed",
  },
  {
    date: "2024-08-18",
    ref: "4179463656790",
    amount: "200.00",
    status: "confirmed",
  },

];

const UserViewSubHistory = () => {
  return (
    <div>
      <UserHeader title="Submission History" />

      <div className="status-container">
        <h2 className="page-title">My Submissions</h2>

        {/* Status Table */}
        <div className="table-card">
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Reference No.</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {mockData.map((item, index) => (
                <tr key={index}>
                  <td>{item.date}</td>
                  <td>{item.ref}</td>
                  <td>{item.amount}</td>
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

export default UserViewSubHistory;
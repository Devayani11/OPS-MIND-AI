import "../styles/Dashboard.css";

export default function AdminDashboard() {
  return (
    <div className="dashboard">
      <h2 className="dashboard-title">Admin Dashboard</h2>

      <div className="dashboard-grid">
        <div className="dashboard-card">
          <h4>Total Employees</h4>
          <p>128</p>
          <span className="status-badge">Active</span>
        </div>

        <div className="dashboard-card">
          <h4>Documents Uploaded</h4>
          <p>56</p>
          <span className="status-badge">Updated</span>
        </div>

        <div className="dashboard-card">
          <h4>Pending Reviews</h4>
          <p>8</p>
          <span className="status-badge">Attention</span>
        </div>

        <div className="dashboard-card">
          <h4>System Status</h4>
          <p>Online</p>
          <span className="status-badge">Healthy</span>
        </div>
      </div>
    </div>
  );
}

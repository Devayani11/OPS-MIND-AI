import React, { useState } from "react";
import "../styles/Ingestion.css";

export default function Ingestion() {
  const [files, setFiles] = useState([
    { id: 1, name: "file1.csv", status: "processed", uploadedBy: "John", date: "31-Jan-2026" },
    { id: 2, name: "file2.csv", status: "failed", uploadedBy: "Mary", date: "31-Jan-2026" },
    { id: 3, name: "file3.csv", status: "pending", uploadedBy: "Alex", date: "31-Jan-2026" },
  ]);

  // KPI summary
  const totalFiles = files.length;
  const processed = files.filter(f => f.status === "processed").length;
  const failed = files.filter(f => f.status === "failed").length;
  const pending = files.filter(f => f.status === "pending").length;

  // Actions
  const retryFile = (id) => alert(`Retry file ${id}`);
  const deleteFile = (id) => setFiles(files.filter(f => f.id !== id));
  const cancelFile = (id) => setFiles(files.map(f => f.id === id ? { ...f, status: "failed" } : f));

  return (
    <div className="ingestion-container">
      {/* Page Header */}
      <h2>Ingestion Status</h2>
      <p>Monitor files/data ingestion progress, status, and errors</p>

      {/* KPI Cards */}
      <div className="kpi-cards">
        <div className="kpi-card">
          <h3>{totalFiles}</h3>
          <p>Total Files</p>
        </div>
        <div className="kpi-card">
          <h3>{processed}</h3>
          <p>Processed Successfully</p>
        </div>
        <div className="kpi-card">
          <h3>{failed}</h3>
          <p>Failed</p>
        </div>
        <div className="kpi-card">
          <h3>{pending}</h3>
          <p>Pending</p>
        </div>
      </div>

      {/* Ingestion Table */}
      <table className="ingestion-table">
        <thead>
          <tr>
            <th>File Name</th>
            <th>Status</th>
            <th>Uploaded By</th>
            <th>Upload Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {files.map(file => (
            <tr key={file.id}>
              <td>{file.name}</td>
              <td className={`status ${file.status}`}>{file.status === "processed" ? "✅ Processed" : file.status === "failed" ? "❌ Failed" : "⏳ Pending"}</td>
              <td>{file.uploadedBy}</td>
              <td>{file.date}</td>
              <td>
                <button className="action-btn view-btn">View</button>
                {file.status === "failed" && <button className="action-btn retry-btn" onClick={() => retryFile(file.id)}>Retry</button>}
                {file.status === "pending" && <button className="action-btn cancel-btn" onClick={() => cancelFile(file.id)}>Cancel</button>}
                {(file.status === "processed" || file.status === "failed") && <button className="action-btn delete-btn" onClick={() => deleteFile(file.id)}>Delete</button>}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

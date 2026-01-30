import { FaHome, FaFilePdf, FaSignOutAlt } from "react-icons/fa";

export default function Sidebar({ setPage }) {
  return (
    <div className="sidebar">
      <h3>OpsMind AI</h3>

      <p onClick={() => setPage("dashboard")}>
        <FaHome /> Dashboard
      </p>

      <p onClick={() => setPage("documents")}>
        <FaFilePdf /> Documents
      </p>

      <p
        onClick={() => {
          localStorage.clear();
          window.location.href = "/";
        }}
      >
        <FaSignOutAlt /> Logout
      </p>
    </div>
  );
}

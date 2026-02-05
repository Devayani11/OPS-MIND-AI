import { NavLink, useNavigate } from "react-router-dom";
import "../styles/Sidebar.css";

export default function Sidebar() {
  const navigate = useNavigate();

  return (
    <div className="sidebar">
      <h1 className="sidebar-title">OpsMind AI</h1>

      <NavLink
        to="/dashboard"
        className={({ isActive }) =>
          isActive ? "sidebar-btn active" : "sidebar-btn"
        }
      >
        Dashboard
      </NavLink>

      <NavLink
        to="/documents"
        className={({ isActive }) =>
          isActive ? "sidebar-btn active" : "sidebar-btn"
        }
      >
        Documents
      </NavLink>

      <NavLink
        to="/employees"
        className={({ isActive }) =>
          isActive ? "sidebar-btn active" : "sidebar-btn"
        }
      >
        Employee Management
      </NavLink>

      {/* 🔴 route name fixed to lowercase */}
      <NavLink
        to="/ingestion"
        className={({ isActive }) =>
          isActive ? "sidebar-btn active" : "sidebar-btn"
        }
      >
        Ingestion Status
      </NavLink>

      {/* ✅ Logout works */}
      <button
        className="sidebar-logout"
        onClick={() => {
          localStorage.clear();
          navigate("/");
        }}
      >
        Logout
      </button>
    </div>
  );
}

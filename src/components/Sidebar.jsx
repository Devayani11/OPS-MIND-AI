import { NavLink, useNavigate } from "react-router-dom";
 import "../styles/adminsidebar.css";

export default function Sidebar() {
  const navigate = useNavigate();

  return (
    <div className="sidebar">
      <h1 className="sidebar-title">OpsMind AI</h1>

      <NavLink
        to="/admin"
        end
        className={({ isActive }) =>
          isActive ? "sidebar-btn active" : "sidebar-btn"
        }
      >
        Dashboard
      </NavLink>

      <NavLink
        to="/admin/documents"
        className={({ isActive }) =>
          isActive ? "sidebar-btn active" : "sidebar-btn"
        }
      >
        Documents
      </NavLink>

      <NavLink
        to="/admin/employees"
        className={({ isActive }) =>
          isActive ? "sidebar-btn active" : "sidebar-btn"
        }
      >
        Employee Management
      </NavLink>

      <NavLink
        to="/admin/ingestion"
        className={({ isActive }) =>
          isActive ? "sidebar-btn active" : "sidebar-btn"
        }
      >
        Ingestion Status
      </NavLink>

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

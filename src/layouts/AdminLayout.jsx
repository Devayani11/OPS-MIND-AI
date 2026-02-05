import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import "../styles/adminsidebar.css";


export default function AdminLayout() {
  return (
    <div className="admin-layout">
      <Sidebar />
      <div className="main-content">   {/* 🔥 changed */}
        <Outlet />
      </div>
    </div>
  );
}

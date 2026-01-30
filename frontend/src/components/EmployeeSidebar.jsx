import React from "react";
import "../styles/sidebar.css";
import { useNavigate } from "react-router-dom";

export default function EmployeeSidebar({
  isOpen,
  chats,
  setActiveChat,
  createNewChat,
  closeSidebar
}) {
  const navigate = useNavigate(); // 🔥 MUST be INSIDE component

  const handleLogout = () => {
    localStorage.removeItem("userRole"); // clear session
    navigate("/"); // go back to login
  };

  return (
    <div className={`employee-sidebar ${isOpen ? "open" : ""}`}>
      <div className="sidebar-content">
        <h2 className="sidebar-title">OpsMind AI</h2>

        <button
          className="new-chat-btn"
          onClick={() => {
            createNewChat();
            closeSidebar();
          }}
        >
          + New Chat
        </button>

        <div className="chat-list">
          {chats.map((chat, index) => (
            <div
              key={index}
              className="chat-item"
              onClick={() => {
                setActiveChat(index);
                closeSidebar();
              }}
            >
              💬 {chat.title}
            </div>
          ))}
        </div>

        {/* ✅ Logout Button */}
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
}

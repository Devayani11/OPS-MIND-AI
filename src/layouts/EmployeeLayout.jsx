import { useState, useEffect } from "react";
import EmployeeSidebar from "../components/EmployeeSidebar";
import EmployeeChat from "../pages/EmployeeChat";
import "../styles/employeeLayout.css";
import "../styles/chat.css";

export default function EmployeeLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false); // start closed

  const [chats, setChats] = useState(() => {
    const saved = localStorage.getItem("employeeChats");
    return saved ? JSON.parse(saved) : [{ title: "New Chat", messages: [] }];
  });

  const [activeChatIndex, setActiveChatIndex] = useState(0);

  useEffect(() => {
    localStorage.setItem("employeeChats", JSON.stringify(chats));
  }, [chats]);

  const createNewChat = () => {
    const newChats = [...chats, { title: "New Chat", messages: [] }];
    setChats(newChats);
    setActiveChatIndex(newChats.length - 1);
  };

  return (
    <div className="employee-layout">
      
      {/* ☰ ALWAYS VISIBLE BUTTON */}
      <button
        className="global-menu-btn"
        onClick={() => setSidebarOpen(prev => !prev)}
      >
        ☰
      </button>

      <EmployeeSidebar
        isOpen={sidebarOpen}
        chats={chats}
        setActiveChat={setActiveChatIndex}
        createNewChat={createNewChat}
        closeSidebar={() => setSidebarOpen(false)}
      />

      {/* Main chat area (no shifting now) */}
      <div className="employee-main">
        <EmployeeChat
          chats={chats}
          setChats={setChats}
          activeChatIndex={activeChatIndex}
        />
      </div>
    </div>
  );
}

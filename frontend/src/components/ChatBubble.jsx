import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/chat.css";

export default function EmployeeChat() {
  const navigate = useNavigate();

  const [messages, setMessages] = useState([
    { sender: "user", text: "How do I request for leave?" },
    { sender: "bot", text: "Fill the leave form in HR portal." },
    { sender: "user", text: "What is our dress code policy?" },
    { sender: "bot", text: "Business casual attire is required." },
  ]);

  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;

    setMessages([...messages, { sender: "user", text: input }]);
    setInput("");
  };

  // ✅ LOGOUT NAVIGATION
  const handleLogout = () => {
    localStorage.clear();
    navigate("/login", { replace: true });
  };

  return (
    <div className="employee-chat-page">
      <div className="chat-container">

        {/* HEADER */}
        <div className="chat-header">
          <h3>OpsMind AI Employee Chat</h3>
          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </div>

        {/* APP DESCRIPTION */}
        <div className="chat-description">
          <p>
            OpsMind AI helps employees quickly access HR policies, company
            guidelines, and internal support using intelligent conversational AI.
            Ask questions, get instant answers, and stay productive.
          </p>
        </div>

        {/* CHAT BODY */}
        <div className="chat-body">
          {messages.map((msg, index) => (
            <div key={index} className={`message ${msg.sender}`}>
              {msg.text}
            </div>
          ))}
        </div>

        {/* INPUT */}
        <div className="chat-input">
          <input
            type="text"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />
          <button onClick={sendMessage}>Send</button>
        </div>

      </div>
    </div>
  );
}

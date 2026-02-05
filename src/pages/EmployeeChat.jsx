// src/pages/EmployeeChat.jsx
import React, { useState, useEffect, useRef } from "react";
import "../styles/chat.css";

export default function EmployeeChat({ chats, setChats, activeChatIndex }) {
  const [message, setMessage] = useState("");
  const messagesEndRef = useRef(null);

  const activeChat = chats[activeChatIndex];

  const sendMessage = () => {
    if (!message.trim()) return;

    // Add employee message
    const updatedChats = [...chats];
    updatedChats[activeChatIndex].messages.push({ text: message, sender: "employee" });
    setChats(updatedChats);
    setMessage("");

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = `AI Response: ${message}`;
      const updatedChatsAI = [...updatedChats];
      updatedChatsAI[activeChatIndex].messages.push({ text: aiResponse, sender: "ai" });
      setChats(updatedChatsAI);
    }, 800);
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [activeChat.messages]);

  return (
    <div className="chat-container">
      <div className="chat-header">
        <h3>{activeChat.title}</h3>
      </div>

      <div className="chat-messages">
        {activeChat.messages.map((msg, idx) => (
          <div key={idx} className={`chat-message ${msg.sender}`}>
            {msg.text}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div className="chat-input">
        <input
          type="text"
          placeholder="Type a message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}

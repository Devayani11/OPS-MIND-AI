import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/login.css";
import brainImg from "../assets/ai-brain.png";

const Login = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState("admin"); 
const handleLogin = () => {
  if (role === "admin") {
    localStorage.setItem("userRole", "admin");
    navigate("/admin");
  } else {
    localStorage.setItem("userRole", "employee");
    navigate("/employee");
  }
};



  return (
    <div className="login-wrapper">
      
      
      <div className="login-left">
        <img src={brainImg} alt="AI Brain" />
      </div>

      
      <div className="login-right">
        <div className="login-card">
          <h2>OpsMind AI Login</h2>
          <p className="subtitle">Secure enterprise authentication</p>

          
          <div className="tabs">
            <button
              className={role === "admin" ? "active" : ""}
              onClick={() => setRole("admin")}
            >
              Admin
            </button>
            <button
              className={role === "employee" ? "active" : ""}
              onClick={() => setRole("employee")}
            >
              Employee ID
            </button>
          </div>

          <input type="text" placeholder="Email" />
          <input type="password" placeholder="Enter password" />

          <a href="#" className="forgot">Forgot password?</a>

          <button className="login-btn" onClick={handleLogin}>
            Login
          </button>

          <p className="register-text">
            Don’t have an account? <Link to="/register">Register Now</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

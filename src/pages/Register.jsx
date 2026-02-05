import "../styles/register.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    username: "",
    password: "",
    role: "employee",
  });

  const handleRegister = () => {
    localStorage.setItem("user", JSON.stringify(form));
    alert("Registration successful!");
    navigate("/");
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <h2>Register</h2>

        <input
          placeholder="Username"
          onChange={(e) => setForm({ ...form, username: e.target.value })}
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <select
          onChange={(e) => setForm({ ...form, role: e.target.value })}
        >
          <option value="employee">Employee</option>
          <option value="admin">Admin</option>
        </select>

        <button onClick={handleRegister}>Register</button>
        <p onClick={() => navigate("/")}>Already have an account? Login</p>
      </div>
    </div>
  );
}

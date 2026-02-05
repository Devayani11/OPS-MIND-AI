import React, { useState } from "react";
import "../styles/Employee.css";

export default function EmployeeManagement() {
  const [employees, setEmployees] = useState([
    { id: 1, name: "John", status: "pending" },
    { id: 2, name: "Alice", status: "active" },
    { id: 3, name: "Bob", status: "pending" },
    { id: 4, name: "Mary", status: "active" },
  ]);

  const [search, setSearch] = useState("");

  // Filter employees based on search input
  const filteredEmployees = employees.filter(emp =>
    emp.name.toLowerCase().includes(search.toLowerCase())
  );

  // Actions
  const approve = (id) =>
    setEmployees(
      employees.map(emp => emp.id === id ? { ...emp, status: "active" } : emp)
    );

  const reject = (id) =>
    setEmployees(
      employees.map(emp => emp.id === id ? { ...emp, status: "rejected" } : emp)
    );

  const remove = (id) =>
    setEmployees(employees.filter(emp => emp.id !== id));

  return (
    <div className="employee-container">
      <h2>Employee Management</h2>
      <p>Approve, reject, or remove employees from the system</p>

      {/* Total Employees + Search Bar */}
      <div className="employee-header">
        <div className="stats">Total Employees: {employees.length}</div>
        <input
          type="text"
          placeholder="Search employees..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Employee List */}
      <div className="employee-list">
        {filteredEmployees.length === 0 ? (
          <p>No employees found.</p>
        ) : (
          filteredEmployees.map(emp => (
            <div key={emp.id} className="employee-item">
              <span>{emp.name} - {emp.status}</span>
              <div>
                {emp.status === "pending" && (
                  <>
                    <button className="approve" onClick={() => approve(emp.id)}>Approve</button>
                    <button className="reject" onClick={() => reject(emp.id)}>Reject</button>
                  </>
                )}
                <button className="remove" onClick={() => remove(emp.id)}>Remove</button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

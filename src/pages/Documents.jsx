import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import "../styles/Documents.css";
import "../styles/admin.css";

export default function Documents() {
  const [documents, setDocuments] = useState([
    { name: "file1.pdf" },
    { name: "file2.pdf" },
  ]);
  const [search, setSearch] = useState("");

  const filteredDocs = documents.filter(doc =>
    doc.name.toLowerCase().includes(search.toLowerCase())
  );

  const removeDocument = (name) => {
    setDocuments(documents.filter(doc => doc.name !== name));
  };

  return (
    <div className="admin-layout">
      <Sidebar />

      <div className="admin-content">
        <h2>Documents</h2>
        <p>Manage your uploaded PDFs here</p>

        <div className="search-upload">
          <input
            type="text"
            placeholder="Search documents..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <input
            type="file"
            accept="application/pdf"
            onChange={(e) => {
              if (e.target.files.length > 0) {
                setDocuments([...documents, { name: e.target.files[0].name }]);
              }
            }}
          />
        </div>

        <div className="document-list">
          {filteredDocs.length === 0 ? (
            <p className="text-gray-500">No documents found.</p>
          ) : (
            filteredDocs.map((doc) => (
              <div key={doc.name} className="document-item">
                <span>{doc.name}</span>
                <button onClick={() => removeDocument(doc.name)}>
                  Remove
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

import { useState } from "react";
import Sidebar from "../components/Sidebar";
import "../styles/admin.css";

export default function AdminDashboard() {
  const [page, setPage] = useState("dashboard");
  const [documents, setDocuments] = useState([
    "Company_Policy.pdf",
    "Safety_Manual.pdf",
    "HR_Guide.pdf",
  ]);
  const [file, setFile] = useState(null);

  const [ingestionHistory, setIngestionHistory] = useState([]);

  const uploadPDF = async () => {
    if (!file) return;
    const arrayBuffer = await file.arrayBuffer();
    const pdf = await pdfjsLib.getDocument(arrayBuffer).promise;
    const totalPages = pdf.numPages;

   
    const chunkSize = 5;
    const totalChunks = Math.ceil(totalPages / chunkSize);

    setDocuments([...documents, file.name]);

   
    setIngestionHistory([
      ...ingestionHistory,
      {
        name: file.name,
        pages: totalPages,
        chunks: totalChunks,
        stored: totalChunks, 
      },
    ]);

    setFile(null);
  };

  return (
    <div className="admin-layout">
      <Sidebar setPage={setPage} />

      <div className="admin-content">
        {page === "dashboard" && (
          <>
            <h2>Admin Dashboard</h2>
            <p>Welcome Admin 👋</p>
          </>
        )}

        {page === "documents" && (
          <>
            <h2>Documents</h2>

            <div className="card">
              <h3>Upload Knowledge PDFs</h3>
              <input
                type="file"
                accept=".pdf"
                onChange={(e) => setFile(e.target.files[0])}
              />
              <button onClick={uploadPDF}>Upload PDF</button>
            </div>

            <div className="card">
              <h3>Uploaded Documents</h3>
              <ul>
                {documents.map((doc, i) => (
                  <li key={i}>{doc}</li>
                ))}
              </ul>
            </div>

            <div className="card">
              <h3>Ingestion History</h3>
              {ingestionHistory.map((item, index) => (
                <div key={index} className="ingestion-item">
                  <p><strong>{item.name}</strong></p>
                  <div className="ingestion-stats">
                    <div>
                      <h4>{item.pages}</h4>
                      <p>Pages</p>
                    </div>
                    <div>
                      <h4>{item.chunks}</h4>
                      <p>Chunks</p>
                    </div>
                    <div>
                      <h4>{item.stored}</h4>
                      <p>Stored</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

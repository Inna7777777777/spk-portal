import React, { useEffect, useState } from "react";
import { getDocuments } from "../api/documents";

export default function DocumentsPage() {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    getDocuments().then(setDocs).catch(console.error);
  }, []);

  const categoryLabel = (cat) => {
    if (cat === "устав") return "Устав";
    if (cat === "протокол") return "Протокол";
    if (cat === "решение") return "Решение";
    return cat;
  };

  return (
    <div>
      <div className="card" style={{ marginBottom: "0.8rem" }}>
        <div className="card-header">
          <h3 className="card-title">Официальные документы</h3>
          <span className="card-badge">PDF, DOC, сканы</span>
        </div>
        <p style={{ fontSize: "0.85rem", margin: 0 }}>
          Все загружаемые документы должны соответствовать требованиям законодательства и решениям общего собрания.
        </p>
      </div>
      <div className="card">
        <table className="table">
          <thead>
            <tr>
              <th>Название</th>
              <th>Категория</th>
              <th>Дата загрузки</th>
            </tr>
          </thead>
          <tbody>
            {docs.map((d) => (
              <tr key={d.id}>
                <td>{d.title}</td>
                <td>{categoryLabel(d.category)}</td>
                <td>{d.uploaded_at}</td>
              </tr>
            ))}
            {docs.length === 0 && (
              <tr>
                <td colSpan={3} style={{ padding: "0.8rem", fontSize: "0.85rem" }}>
                  Документы еще не загружены. После загрузки устава, протоколов и решений они появятся здесь.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

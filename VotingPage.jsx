import React, { useEffect, useState } from "react";
import { getPolls } from "../api/voting";

export default function VotingPage() {
  const [polls, setPolls] = useState([]);

  useEffect(() => {
    getPolls().then(setPolls).catch(console.error);
  }, []);

  return (
    <div>
      <div className="card" style={{ marginBottom: "0.8rem" }}>
        <div className="card-header">
          <h3 className="card-title">Онлайн-голосования</h3>
          <span className="card-badge">В разработке</span>
        </div>
        <p style={{ fontSize: "0.85rem", margin: 0 }}>
          Система разработана так, чтобы можно было реализовать легитимные очно-заочные решения в соответствии с 217-ФЗ и уставом СПК.
        </p>
      </div>
      <div className="card">
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {polls.map((p) => (
            <li key={p.id} style={{ padding: "0.45rem 0", borderBottom: "1px solid #e5e7eb" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <strong>{p.title}</strong>
                  {p.description && (
                    <div style={{ fontSize: "0.8rem", color: "#6b7280", marginTop: "0.1rem" }}>
                      {p.description}
                    </div>
                  )}
                </div>
                <span className={p.is_active ? "badge success" : "badge muted"}>
                  {p.is_active ? "Активно" : "Завершено"}
                </span>
              </div>
            </li>
          ))}
          {polls.length === 0 && (
            <li style={{ fontSize: "0.85rem" }}>
              Активных голосований пока нет. Когда правление создаст опрос, он появится здесь.
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}

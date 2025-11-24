import React, { useEffect, useState } from "react";
import { getTopics } from "../api/forum";

export default function ForumPage() {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    getTopics().then(setTopics).catch(console.error);
  }, []);

  return (
    <div>
      <div className="card" style={{ marginBottom: "0.8rem" }}>
        <div className="card-header">
          <h3 className="card-title">Форум садоводов</h3>
          <span className="card-badge">Обсуждения</span>
        </div>
        <p style={{ fontSize: "0.85rem", margin: 0 }}>
          Площадка для идей, предложений и конструктивного диалога. Для официальных обращений используйте письменные формы.
        </p>
      </div>
      <div className="card">
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {topics.map((t) => (
            <li key={t.id} style={{ padding: "0.5rem 0", borderBottom: "1px solid #e5e7eb" }}>
              <div style={{ fontSize: "0.92rem", fontWeight: 600 }}>{t.title}</div>
              <div style={{ fontSize: "0.8rem", color: "#6b7280" }}>
                Автор: {t.author_name || "Не указан"}
              </div>
            </li>
          ))}
          {topics.length === 0 && (
            <li style={{ fontSize: "0.85rem" }}>
              Тем пока нет. Правление или администратор могут создать первую тему обсуждения.
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}

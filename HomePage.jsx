import React, { useEffect, useState } from "react";
import { getNews } from "../api/news";

export default function HomePage() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    getNews().then(setNews).catch(console.error);
  }, []);

  return (
    <div>
      <div className="dashboard-grid">
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Статус сезона</h3>
            <span className="card-badge">Онлайн</span>
          </div>
          <p style={{ fontSize: "0.85rem", margin: 0 }}>
            Портал работает, вы можете оплачивать взносы, голосовать и следить за новостями СНТ.
          </p>
          <div className="card-footer">Обращения и вопросы — через форум или Telegram.</div>
        </div>
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Ближайшие задачи</h3>
          </div>
          <ul style={{ paddingLeft: "1rem", margin: 0, fontSize: "0.85rem" }}>
            <li>Проверить начисления взносов.</li>
            <li>Принять участие в текущем голосовании.</li>
            <li>Ознакомиться с последними протоколами правления.</li>
          </ul>
        </div>
      </div>

      <h2 style={{ marginTop: "1.4rem", marginBottom: "0.6rem", fontSize: "1.05rem" }}>
        Лента новостей
      </h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
        {news.length === 0 && (
          <div className="card">
            <p style={{ fontSize: "0.9rem", margin: 0 }}>Пока нет опубликованных новостей.</p>
          </div>
        )}
        {news.map((item) => (
          <article key={item.id} className="card">
            <div className="card-header">
              <h3 className="card-title">{item.title}</h3>
            </div>
            <p style={{ fontSize: "0.9rem", marginTop: "0.3rem" }}>{item.body}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

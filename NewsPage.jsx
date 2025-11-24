import React, { useEffect, useState } from "react";
import { getNews } from "../api/news";

export default function NewsPage() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    getNews().then(setNews).catch(console.error);
  }, []);

  return (
    <div>
      <div className="card" style={{ marginBottom: "0.8rem" }}>
        <div className="card-header">
          <h3 className="card-title">Официальные объявления</h3>
          <span className="card-badge">Архив и текущие</span>
        </div>
        <p style={{ fontSize: "0.85rem", margin: 0 }}>
          Здесь публикуются важные сообщения правления, уведомления об отключениях, субботниках, собраниях.
        </p>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
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

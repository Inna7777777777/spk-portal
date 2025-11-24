import React from "react";

export default function AdminCabinet() {
  return (
    <div className="dashboard-grid">
      <div className="card">
        <div className="card-header">
          <h3 className="card-title">Кабинет администратора портала</h3>
          <span className="card-badge">Технический контроль</span>
        </div>
        <p style={{ fontSize: "0.85rem", margin: 0 }}>
          Здесь будет управление учетными записями, правами доступа, резервным копированием и интеграциями (Telegram‑бот, e-mail рассылки).
        </p>
        <div className="card-footer">
          Администратор отвечает за стабильную работу системы, но не вмешивается в содержание решений СНТ.
        </div>
      </div>
      <div className="card">
        <div className="card-header">
          <h3 className="card-title">Технические показатели</h3>
        </div>
        <ul style={{ paddingLeft: "1.1rem", margin: 0, fontSize: "0.85rem" }}>
          <li>Статус API и базы данных.</li>
          <li>Настройка доменов и SSL‑сертификатов.</li>
          <li>Подключение внешних сервисов (хостинг, резервное копирование).</li>
        </ul>
      </div>
    </div>
  );
}

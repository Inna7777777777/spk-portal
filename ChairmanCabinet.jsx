import React from "react";

export default function ChairmanCabinet() {
  return (
    <div className="dashboard-grid">
      <div className="card">
        <div className="card-header">
          <h3 className="card-title">Кабинет председателя</h3>
          <span className="card-badge">Управление СПК</span>
        </div>
        <p style={{ fontSize: "0.85rem", margin: 0 }}>
          Здесь собирается ключевая информация для оперативного управления кооперативом: новости, голосования, финансы.
        </p>
        <div className="card-footer">
          В дальнейшем здесь появятся формы добавления новостей, запуск голосований и загрузка протоколов.
        </div>
      </div>
      <div className="card">
        <div className="card-header">
          <h3 className="card-title">Панель задач</h3>
        </div>
        <ul style={{ paddingLeft: "1.1rem", margin: 0, fontSize: "0.85rem" }}>
          <li>Проверить актуальность новостей и объявлений.</li>
          <li>Контролировать проведение голосований и кворум.</li>
          <li>Согласовывать документы с ревизионной и бухгалтером.</li>
        </ul>
      </div>
    </div>
  );
}

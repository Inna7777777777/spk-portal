import React from "react";

export default function BoardCabinet() {
  return (
    <div className="dashboard-grid">
      <div className="card">
        <div className="card-header">
          <h3 className="card-title">Кабинет правления</h3>
          <span className="card-badge">Коллегиальная работа</span>
        </div>
        <p style={{ fontSize: "0.85rem", margin: 0 }}>
          Раздел для совместной работы членов правления: подготовка повесток, протоколов и проектов решений.
        </p>
        <div className="card-footer">
          В дальнейшем тут можно разместить внутренний чат и электронные черновики протоколов.
        </div>
      </div>
      <div className="card">
        <div className="card-header">
          <h3 className="card-title">Типичные вопросы повестки</h3>
        </div>
        <ul style={{ paddingLeft: "1.1rem", margin: 0, fontSize: "0.85rem" }}>
          <li>Вопросы электрохозяйства и дорог.</li>
          <li>Принятие новых членов и исключение.</li>
          <li>Подготовка к собраниям и отчетам.</li>
        </ul>
      </div>
    </div>
  );
}

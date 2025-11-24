import React from "react";

export default function AuditorCabinet() {
  return (
    <div className="dashboard-grid">
      <div className="card">
        <div className="card-header">
          <h3 className="card-title">Кабинет ревизионной комиссии</h3>
          <span className="card-badge">Контроль</span>
        </div>
        <p style={{ fontSize: "0.85rem", margin: 0 }}>
          Здесь будет сосредоточен доступ к реестрам взносов, расходам, протоколам и отчетам правления для проверки.
        </p>
        <div className="card-footer">
          Результаты проверок можно публиковать в раздел «Документы» и «Новости».
        </div>
      </div>
      <div className="card">
        <div className="card-header">
          <h3 className="card-title">Зоны внимания</h3>
        </div>
        <ul style={{ paddingLeft: "1.1rem", margin: 0, fontSize: "0.85rem" }}>
          <li>Соответствие расходов утвержденной смете.</li>
          <li>Проверка корректности начислений взносов.</li>
          <li>Соблюдение решений общего собрания.</li>
        </ul>
      </div>
    </div>
  );
}

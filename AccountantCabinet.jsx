import React from "react";

export default function AccountantCabinet() {
  return (
    <div className="dashboard-grid">
      <div className="card">
        <div className="card-header">
          <h3 className="card-title">Кабинет бухгалтера</h3>
          <span className="card-badge">Финансы</span>
        </div>
        <p style={{ fontSize: "0.85rem", margin: 0 }}>
          В этом разделе будет реализован учет поступлений, отметка оплат, формирование реестров и выгрузка отчетов.
        </p>
        <div className="card-footer">
          Для чёткого учета рекомендуется работать совместно с ревизионной комиссией и председателем.
        </div>
      </div>
      <div className="card">
        <div className="card-header">
          <h3 className="card-title">Финансовый мониторинг</h3>
        </div>
        <p style={{ fontSize: "0.85rem", margin: 0 }}>
          В будущем здесь появятся графики оплат, показатели собираемости и список крупных расходов.
        </p>
      </div>
    </div>
  );
}

import React from "react";

export default function MemberCabinet() {
  return (
    <div className="dashboard-grid">
      <div className="card">
        <div className="card-header">
          <h3 className="card-title">Мой статус</h3>
          <span className="card-badge">Садовод</span>
        </div>
        <p style={{ fontSize: "0.85rem", margin: 0 }}>
          В этом кабинете вы можете следить за взносами, голосованиями и важными документами, касающимися вашего участка.
        </p>
        <div className="card-footer">Перейдите во вкладки «Взносы», «Голосования» и «Документы».</div>
      </div>
      <div className="card">
        <div className="card-header">
          <h3 className="card-title">Что можно сделать сейчас</h3>
        </div>
        <ul style={{ paddingLeft: "1.1rem", margin: 0, fontSize: "0.85rem" }}>
          <li>Проверить наличие задолженностей по взносам.</li>
          <li>Ознакомиться с последними протоколами и решениями.</li>
          <li>Принять участие в открытых голосованиях.</li>
        </ul>
      </div>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import { getMyPayments } from "../api/payments";

export default function PaymentsPage() {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    getMyPayments().then(setPayments).catch(console.error);
  }, []);

  const formatStatus = (status) => {
    if (status === "paid") return <span className="badge success">Оплачен</span>;
    if (status === "overdue") return <span className="badge warning">Просрочен</span>;
    return <span className="badge muted">Не оплачен</span>;
  };

  return (
    <div>
      <div className="card" style={{ marginBottom: "0.8rem" }}>
        <div className="card-header">
          <h3 className="card-title">Мои начисления</h3>
          <span className="card-badge">Членские и целевые</span>
        </div>
        <p style={{ fontSize: "0.85rem", margin: 0 }}>
          Информация носит справочный характер. Для оплаты используйте реквизиты кооператива или QR-код на квитанции.
        </p>
      </div>
      <div className="card">
        <table className="table">
          <thead>
            <tr>
              <th>Вид взноса</th>
              <th>Сумма, ₽</th>
              <th>Срок</th>
              <th>Статус</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((p) => (
              <tr key={p.id}>
                <td>{p.kind}</td>
                <td>{p.amount}</td>
                <td>{p.due_date}</td>
                <td>{formatStatus(p.status)}</td>
              </tr>
            ))}
            {payments.length === 0 && (
              <tr>
                <td colSpan={4} style={{ padding: "0.8rem", fontSize: "0.85rem" }}>
                  Для вас пока нет начислений. Если вы считаете, что это ошибка, обратитесь к бухгалтеру или председателю.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

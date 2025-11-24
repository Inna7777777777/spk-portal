import React, { useEffect, useState } from "react";
import { getPlots } from "../api/map";

export default function MapPage() {
  const [plots, setPlots] = useState([]);

  useEffect(() => {
    getPlots().then(setPlots).catch(console.error);
  }, []);

  return (
    <div>
      <div className="card" style={{ marginBottom: "0.8rem" }}>
        <div className="card-header">
          <h3 className="card-title">Карта участков (список)</h3>
          <span className="card-badge">Упрощенный вид</span>
        </div>
        <p style={{ fontSize: "0.85rem", margin: 0 }}>
          Здесь отображается список участков, их номера, площадь и статус. В дальнейшем можно связать это с геокартой.
        </p>
      </div>
      <div className="card">
        <table className="table">
          <thead>
            <tr>
              <th>№ участка</th>
              <th>Площадь, м²</th>
              <th>Собственник</th>
              <th>Статус</th>
            </tr>
          </thead>
          <tbody>
            {plots.map((p) => (
              <tr key={p.id}>
                <td>{p.number}</td>
                <td>{p.area}</td>
                <td>{p.owner_name || "—"}</td>
                <td>{p.status}</td>
              </tr>
            ))}
            {plots.length === 0 && (
              <tr>
                <td colSpan={4} style={{ padding: "0.8rem", fontSize: "0.85rem" }}>
                  Данные по участкам пока не внесены.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

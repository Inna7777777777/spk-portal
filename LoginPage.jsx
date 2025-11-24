import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login, getCurrentUser } from "../api/auth";
import { useAuth } from "../AuthContext";

export default function LoginPage() {
  const [email, setEmail] = useState("admin@spk.local");
  const [password, setPassword] = useState("admin");
  const [error, setError] = useState(null);
  const { setUser } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      await login({ email, password });
      const u = await getCurrentUser();
      setUser(u);
      navigate("/cabinet");
    } catch (err) {
      console.error(err);
      setError("Ошибка входа. Проверьте email и пароль.");
    }
  };

  return (
    <div className="auth-card">
      <h1 className="auth-title">Вход в портал СПК</h1>
      <p className="auth-sub">
        Используйте учетные данные, выданные правлением. После входа вы увидите свой личный кабинет.
      </p>
      {error && <div className="form-error">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label className="form-label">Email</label>
          <input
            className="form-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
          />
        </div>
        <div className="form-field">
          <label className="form-label">Пароль</label>
          <input
            className="form-input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
          />
        </div>
        <button type="submit" className="btn-primary" style={{ width: "100%", marginTop: "0.4rem" }}>
          Войти в кабинет
        </button>
      </form>
      <div className="auth-footer">
        Если вы не получили доступ, обратитесь к председателю или администратору кооператива.
      </div>
    </div>
  );
}

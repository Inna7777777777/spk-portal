import React from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { Sidebar } from "./components/Sidebar";
import { useAuth } from "./AuthContext";
import { ProtectedRoute } from "./components/ProtectedRoute";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import NewsPage from "./pages/NewsPage";
import PaymentsPage from "./pages/PaymentsPage";
import DocumentsPage from "./pages/DocumentsPage";
import VotingPage from "./pages/VotingPage";
import MapPage from "./pages/MapPage";
import ForumPage from "./pages/ForumPage";
import MemberCabinet from "./pages/cabinets/MemberCabinet";
import ChairmanCabinet from "./pages/cabinets/ChairmanCabinet";
import AccountantCabinet from "./pages/cabinets/AccountantCabinet";
import AuditorCabinet from "./pages/cabinets/AuditorCabinet";
import BoardCabinet from "./pages/cabinets/BoardCabinet";
import AdminCabinet from "./pages/cabinets/AdminCabinet";

function MainShell({ children }) {
  const location = useLocation();
  const titleByPath = {
    "/": "Лента новостей",
    "/news": "Все новости",
    "/payments": "Мои взносы",
    "/docs": "Документы СПК",
    "/voting": "Онлайн-голосования",
    "/map": "Карта участков",
    "/forum": "Форум садоводов",
    "/cabinet": "Личный кабинет",
  };

  const subtitleByPath = {
    "/": "Актуальная информация о жизни кооператива",
    "/news": "Официальные объявления и важные сообщения",
    "/payments": "Начисления, статусы оплат и история взносов",
    "/docs": "Устав, протоколы, решения, сметы и приказы",
    "/voting": "Электронные голосования в соответствии с 217-ФЗ",
    "/map": "Участки, собственники и статус",
    "/forum": "Идеи, предложения и обсуждения",
    "/cabinet": "Персональная панель участника кооператива",
  };

  const path = location.pathname === "/" ? "/" : location.pathname.split("/")[1] ? `/${location.pathname.split("/")[1]}` : location.pathname;

  return (
    <div className="app-root">
      <div className="app-shell">
        <Sidebar />
        <section className="main-card">
          <header className="main-header">
            <div>
              <h1 className="main-title">{titleByPath[path] || "Портал СПК «Хорошово-1»"}</h1>
              <p className="main-subtitle">
                {subtitleByPath[path] || "Единый цифровой центр управления кооперативом"}
              </p>
              <div className="main-meta-chips">
                <span className="chip">217-ФЗ • СНТ / СПК</span>
                <span className="chip">Онлайн-голосования и учет взносов</span>
              </div>
            </div>
          </header>
          <div style={{ flex: 1, minHeight: 0 }}>{children}</div>
        </section>
      </div>
    </div>
  );
}

export default function App() {
  const { user } = useAuth();

  const cabinetByRole = {
    admin: <AdminCabinet />,
    chairman: <ChairmanCabinet />,
    accountant: <AccountantCabinet />,
    auditor: <AuditorCabinet />,
    board: <BoardCabinet />,
    member: <MemberCabinet />,
  };

  return (
    <Routes>
      <Route
        path="/login"
        element={
          <div className="auth-wrapper">
            <LoginPage />
          </div>
        }
      />
      <Route
        path="/"
        element={
          <MainShell>
            <HomePage />
          </MainShell>
        }
      />
      <Route
        path="/news"
        element={
          <MainShell>
            <NewsPage />
          </MainShell>
        }
      />
      <Route
        path="/payments"
        element={
          <MainShell>
            <ProtectedRoute>
              <PaymentsPage />
            </ProtectedRoute>
          </MainShell>
        }
      />
      <Route
        path="/docs"
        element={
          <MainShell>
            <DocumentsPage />
          </MainShell>
        }
      />
      <Route
        path="/voting"
        element={
          <MainShell>
            <ProtectedRoute>
              <VotingPage />
            </ProtectedRoute>
          </MainShell>
        }
      />
      <Route
        path="/map"
        element={
          <MainShell>
            <MapPage />
          </MainShell>
        }
      />
      <Route
        path="/forum"
        element={
          <MainShell>
            <ForumPage />
          </MainShell>
        }
      />
      <Route
        path="/cabinet"
        element={
          <MainShell>
            <ProtectedRoute>
              {cabinetByRole[user?.role] || <MemberCabinet />}
            </ProtectedRoute>
          </MainShell>
        }
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

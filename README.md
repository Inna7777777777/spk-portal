# Портал СПК «Хорошово-1»

Цифровой портал для садоводческого потребительского кооператива СПК «Хорошово-1»:

- личные кабинеты садоводов и правления;
- новости и объявления;
- онлайн-голосования;
- форум и чат;
- карта участков (plots);
- взносы, задолженности, квитанции (основа для интеграции со Сбербанком);
- календарь событий кооператива.

Проект разделён на две части:

- backend/ — сервер на Python + FastAPI + SQLAlchemy;
- frontend/ — интерфейс на React + Vite + Ant Design.

---

## Структура проекта

`text
.
├── backend
│   ├── app
│   │   ├── init.py
│   │   ├── config.py          # Настройки (env, БД, JWT)
│   │   ├── db.py              # Подключение к базе данных
│   │   ├── deps.py            # Зависимости (текущий пользователь, проверка ролей)
│   │   ├── models.py          # Модели БД (User, Plot, News, Documents, Votes, Payments и др.)
│   │   ├── schemas.py         # Pydantic-схемы для API
│   │   ├── security.py        # Hash паролей, JWT-токены
│   │   ├── main.py            # Точка входа FastAPI-приложения
│   │   └── routers            # Маршруты (эндпоинты API)
│   │       ├── init.py
│   │       ├── auth.py        # Авторизация, регистрация, JWT
│   │       ├── users.py       # Пользователи, роли
│   │       ├── news.py        # Новости и объявления
│   │       ├── documents.py   # Документы (устав, протоколы и т.п.)
│   │       ├── forum.py       # Форум
│   │       ├── chat.py        # Простой чат
│   │       ├── voting.py      # Онлайн-голосования
│   │       ├── calendar.py    # Календарь событий
│   │       └── plots.py       # Карта участков (plots) — ПОЛНЫЙ CRUD
│   ├── requirements.txt       # Python-зависимости
│   ├── Dockerfile             # Docker-образ backend (для VPS/контейнера)
│   ├── .env.example           # Пример настроек окружения
│   └── spk.db                 # (опционально) SQLite база для локального запуска
│
└── frontend
    ├── index.html
    ├── vite.config.js
    ├── package.json           # Зависимости фронтенда
    └── src
        ├── main.jsx           # Входная точка React
        ├── App.jsx            # Основное приложение портала
        ├── api.js             # Подключение к backend (axios + VITE_API_URL)
        └── styles / css       # Стили, в том числе portal.css










<p align="center">
  <img src="assets/logo.png" alt="СПК Хорошово-1" width="160"/>
</p>

<h1 align="center">🌿 SPK Portal — цифровой портал СПК «Хорошово-1»</h1>

<p align="center">
  Современная система управления садоводческим кооперативом.<br>
  Личные кабинеты • Голосования • Документы • Новости • Платежи • Чат • Карта участков
</p>

<p align="center">
  <img src="https://img.shields.io/badge/status-active-success?style=for-the-badge">
  <img src="https://img.shields.io/badge/build-passing-brightgreen?style=for-the-badge">
  <img src="https://img.shields.io/badge/platform-FastAPI%20%2B%20React-blue?style=for-the-badge">
  <img src="https://img.shields.io/badge/license-MIT-yellow?style=for-the-badge">
</p>

---

# 📌 О проекте

🌿 SPK Portal — динамический многофункциональный портал для управления садоводческим потребительским кооперативом.

Проект включает:

- ✔ Личный кабинет садовода  
- ✔ Личный кабинет председателя  
- ✔ Личный кабинет правления  
- ✔ Личный кабинет ревизионной комиссии  
- ✔ Бухгалтерию  
- ✔ Систему онлайн-голосований  
- ✔ Чат (внутренний)  
- ✔ Мини-форум  
- ✔ Управление документами  
- ✔ Новости и объявления  
- ✔ Онлайн-собрания (Jitsi/Zoom/Telegram)  
- ✔ Карта участков  
- ✔ Полную админ-панель

---

# 🌟 Снимки интерфейса (скриншоты)

<p align="center">
  <img src="assets/screenshots/main.png" width="800" alt="Главная страница"/>
</p>

<p align="center">
  <img src="assets/screenshots/admin-panel.png" width="800" alt="Админ-панель"/>
</p>

<p align="center">
  <img src="assets/screenshots/voting.png" width="800" alt="Онлайн голосование"/>
</p>

*(Если хочешь — я создам тебе готовые картинки и положу в assets/screenshots.)*

---

# 🚀 Технологии

| Модуль | Технологии | Описание |
|--------|------------|----------|
| Backend (API) | FastAPI, SQLAlchemy, Python | Авторизация, БД, голосования, чат, документы |
| Frontend | React + Vite | Публичный сайт |
| Admin Panel | React + Ant Design | Панель управления СПК |
| БД | SQLite или PostgreSQL | Конфигурируется через ENV |
| DevOps | Docker, Render, Nginx | Продакшн-окружение |

---

# 📂 Структура проекта

spk-portal/ │ ├── backend/ │   ├── app/ │   ├── routers/ │   ├── models/ │   ├── media/ │   ├── requirements.txt │   └── main.py │ ├── frontend/ │   ├── src/ │   ├── public/ │   └── vite.config.js │ ├── admin-frontend/ │   ├── src/ │   └── vite.config.js │ ├── assets/ │   └── screenshots/ └── README.md

---

# 🔐 Роли пользователей

- 👤 Садовод
- 🧑‍💼 Председатель
- 🏛️ Правление
- 📊 Ревизионная комиссия
- 💼 Бухгалтер
- 🛠️ Администратор

У каждого — отдельный личный кабинет + свои разрешения.

---

# 🗳 Модули портала

### ✔ Новости  
### ✔ Документы (CRUD + загрузка файлов)  
### ✔ Онлайн-голосования  
### ✔ Карта участков  
### ✔ Чат  
### ✔ Форум  
### ✔ Платежи и взносы  
### ✔ Личные кабинеты  
### ✔ Панель администратора  
### ✔ Интеграции (Telegram / WhatsApp / VK)  
### ✔ Онлайн-собрания  

---

# ⚙️ Установка и запуск (локально)

## 🟩 Backend
cd backend
pip install -r requirements.txt
uvicorn app.main:app --reload

🟦 Frontend

cd frontend
npm install
npm run dev

🟧 Admin Panel

cd admin-frontend
npm install
npm run dev


---

🌐 Деплой на Render (короткая версия)

Backend

Root Directory: backend
Build Command: pip install -r requirements.txt
Start Command: uvicorn app.main:app --host 0.0.0.0 --port 10000

Frontend

Root Directory: frontend
Build Command: npm install && npm run build
Publish Directory: dist

Admin

Root Directory: admin-frontend
Build Command: npm install && npm run build
Publish Directory: dist


---

📞 Контакты проекта

Telegram: https://t.me/SPK_Khoroshovo_1
VK: https://vk.com/club228905465
Email: spkkhoroshovo-1@bk.ru


---

🔖 Лицензия

Проект распространяется под лицензией MIT.
Вы можете свободно использовать, изменять и развивать его.


---

<p align="center">© 2025 СПК «Хорошово-1». Все права защищены.</p>

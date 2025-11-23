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

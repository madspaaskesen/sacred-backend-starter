# 🕊️ Sacred Backend Starter

A clean and secure Node.js + Express backend starter with JWT auth, Prisma, and built-in testing.

Perfect for starting new API projects or cloning into sacred ecosystems like **Sacred-AI** or **MySiteChart**.

---

## ✨ Features

- Express.js + Prisma
- JWT authentication (with only `id` + `name` in token)
- Auth endpoints: `/auth/register`, `/auth/login`
- Protected user update route: `PATCH /user/:id`
- Environment config via `.env`
- Full linting (`eslint + prettier`)
- Jest + Supertest test suite
- No migrations included — you run your own

---

## 🚀 Getting Started

### 1. Clone & install dependencies

```bash
git clone https://github.com/madspaaskesen/sacred-backend-starter.git
cd sacred-backend-starter
npm install
```

### 2. Configure environment

Copy `.env.example` to `.env` and update your settings:

```env
DATABASE_URL=postgresql://...
JWT_SECRET=your-secret
CORS_ORIGIN=http://localhost:5173
```

### 3. Setup your DB

```bash
npx prisma generate
npx prisma migrate dev --name init
```

### 4. Start the server

```bash
npm run dev
```

Server will run on `http://localhost:8080`.

---

## 🧪 Running Tests

```bash
npm run test
```

Includes full coverage for `/auth` and `/user` routes.

---

## 📦 Scripts

- `npm run dev` – local dev with `nodemon`
- `npm run start` – start server
- `npm run lint` – lint the code
- `npm run format` – run Prettier
- `npm run test` – run Jest test suite
- `npx prisma studio` – inspect DB visually

---

## 🧘 Philosophy

This backend is designed to be:
- **Minimal**, with only useful tools included
- **Secure**, using JWT and bcrypt
- **Extendable**, for custom projects or sacred platforms

---

### 🌐 Related Projects

- 🕊️ [Sacred-AI](https://sacred-ai.com)
- 📈 [MySiteChart](https://mysitechart.com)
- 🛠️ [MP-IT](https://mp-it.dk)

---

Built with love by [@mads](https://github.com/madspaaskesen) @ [@sacred-ai](https://github.com/Sacred-AI) 💛

---

![Node.js](https://img.shields.io/badge/Node.js-18.x-green)
![License](https://img.shields.io/github/license/sacred-ai/sacred-backend-starter)
![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)
![Tests](https://img.shields.io/badge/tests-passing-brightgreen)

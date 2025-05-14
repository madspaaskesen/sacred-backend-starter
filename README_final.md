# 🕊️ Sacred Backend Starter

A clean and secure Node.js + Express backend starter with JWT auth, Prisma, and full test coverage — made to grow sacred projects.

---

![Node.js](https://img.shields.io/badge/Node.js-18.x-green)
![License](https://img.shields.io/github/license/sacred-ai/sacred-backend-starter)
![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)
![Tests](https://img.shields.io/badge/tests-passing-brightgreen)

---

## ✨ Features

- Express.js + Prisma
- JWT authentication (`id` + `name` only in payload)
- Secure password handling with bcrypt
- Auth routes: `/auth/register`, `/auth/login`
- Protected user update: `PATCH /user/:id`
- `.env`-based config
- Prettier + ESLint formatting
- Jest + Supertest tests
- No migrations included (clean start)

---

## 🚀 Getting Started

```bash
git clone https://github.com/sacred-ai/sacred-backend-starter.git
cd sacred-backend-starter
npm install
```

### 🔧 Configure environment

Create a `.env` file from `.env.example`:

```env
DATABASE_URL=postgresql://...
JWT_SECRET=your-secret
CORS_ORIGIN=http://localhost:5173
```

### 🧱 Setup DB

```bash
npx prisma generate
npx prisma migrate dev --name init
```

### ▶️ Start the server

```bash
npm run dev
```

---

## 🧪 Running Tests

```bash
npm run test
```

Tests are located in `/tests` and include full auth + user update coverage.

---

## 📦 Scripts

| Script             | Description                            |
|--------------------|----------------------------------------|
| `npm run dev`      | Dev server with nodemon                |
| `npm run start`    | Run production server                  |
| `npm run lint`     | Lint the code                          |
| `npm run format`   | Prettier format the project            |
| `npm run test`     | Run all Jest + Supertest tests         |
| `npx prisma studio`| Visual DB browser                      |

---

## 🌐 Related Projects

- 🕊️ [Sacred-AI](https://sacred-ai.com)
- 📈 [MySiteChart](https://mysitechart.com)
- 🛠️ [MP-IT](https://mp-it.dk)

---

Made with clarity and care by [@mads](https://github.com/sacred-ai) 💛

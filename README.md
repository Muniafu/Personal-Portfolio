# Personal Portfolio Website

## Project Overview
A dynamic, full-stack portfolio website integrating a resume/CV, goal manager, blog, project case studies, project tracker, and newsletter. Built for scalability, security, and performance with a modern tech stack.

## Tech Stack

**Frontend:**  
- **React.js** with Vite for lightning-fast development and SWC for rapid compilation  
- **JavaScript** for a flexible development experience  
- **React Query** for efficient data fetching, caching, and background updates  
- **TanStack Router** for modern, high-performance client-side routing

**Backend:**  
- **Node.js + Express.js** for a robust REST API  
- **MongoDB** for scalable, flexible data storage

**UI/Animation:**  
- **CSS Modules** for scoped, maintainable styles  
- **Framer Motion** for smooth, interactive animations

**Security:**  
- **JWT** for secure authentication  
- **Helmet** to secure HTTP headers  
- **CORS** for managing cross-origin requests  
- **Rate Limiting** to protect against brute-force attacks

**DevOps:**  
- **GitHub Actions** for CI/CD workflows  
- **Docker** (optional) for containerized deployments

## Why This Stack?
- **React + Vite + SWC:** Ensures rapid development builds and optimized performance.
- **React Query:** Offers advanced caching and seamless data synchronization.
- **TanStack Router:** Provides a modern routing solution with superior performance.
- **Node/Express:** Delivers a lightweight, flexible backend API.
- **MongoDB:** Supports dynamic data structures and scales effortlessly.

## Features
- **Resume/CV:** Dynamically render skills and experiences directly from MongoDB.
- **Goal Manager:** Create, update, and track personal goals.
- **Blog:** Markdown support, tagging, and commenting for rich content.
- **Project Case Studies:** Filterable gallery with in-depth project details.
- **Project Tracker:** Kanban-style board for managing tasks and projects.
- **Newsletter:** Real-time email subscription powered by optional Firebase integration.

## Project Structure

portfolio/
├── client/                   # React Frontend
│   ├── public/
│   ├── src/
│   │   ├── assets/          # Images, fonts
│   │   ├── components/      # Reusable UI (Navbar, Cards)
│   │   ├── pages/           # Feature pages (Blog, Projects)
│   │   ├── services/        # API calls (axios)
│   │   ├── styles/          # Global CSS modules
│   │   ├── App.js
│   │   └── index.js
│   ├── package.json
│   └── .env.local
│
├── server/                  # Node/Express Backend
│   ├── config/              # DB connection, env setup
│   ├── controllers/         # Logic for routes (blogController.js)
│   ├── middleware/          # Auth, error handling
│   ├── models/              # MongoDB Schemas (Post.js, User.js)
│   ├── routes/              # API endpoints (authRoutes.js)
│   ├── utils/               # Helpers (emailService.js)
│   ├── package.json
│   └── server.js
│
├── .github/                 # CI/CD workflows
├── .dockerignore            # Docker setup (optional)
├── docker-compose.yml
├── README.md
└── .gitignore


## Scalability
- **Modular Architecture:** The decoupled frontend and backend allow for independent scaling.
- **Load Balancing:** Deploy with NGINX or PM2 clustering for high availability.
- **Caching:** Use Redis to cache frequent API responses.
- **Database Scaling:** MongoDB Atlas provides managed scaling and high availability.

## Security
- **Authentication:** Use JWT with short-lived tokens and robust Firebase Auth (optional).
- **Input Sanitization:** Validate and sanitize API inputs to prevent injection attacks.
- **Secure Headers:** Implement Helmet.js to mitigate common security risks.
- **Rate Limiting:** Protect endpoints with express-rate-limit.
- **Secrets Management:** Store sensitive keys in environment variables (managed via .env and excluded by .gitignore).

## Learning Resources
- **React & Vite:** [Vite Documentation](https://vitejs.dev/), [React Docs](https://reactjs.org/)
- **Node/Express:** [Express Documentation](https://expressjs.com/)
- **MongoDB:** [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- **React Query:** [TanStack Query Documentation](https://tanstack.com/query/latest)
- **TanStack Router:** [TanStack Router Documentation](https://tanstack.com/router/latest)
- **Security Best Practices:** [OWASP Cheat Sheet](https://cheatsheetseries.owasp.org/)

## Setup Instructions

### Prerequisites
- **Node.js v18+** must be installed.
- **MongoDB** should be running locally or via MongoDB Atlas.

### Clone the Repository
```bash
git clone https://github.com/yourusername/portfolio.git

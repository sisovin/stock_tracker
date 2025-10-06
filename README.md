# 📈 Stock Tracker

A modern, full-stack platform for tracking, analyzing, and simulating stock trades. Built with [Next.js 15](https://nextjs.org/), [Tailwind CSS v4](https://tailwindcss.com/), [Shadcn/UI](https://ui.shadcn.com/), and a PostgreSQL backend. The project is designed for real-time data ingestion, portfolio management, customizable watchlists, and advanced analytics—ready for both personal use and as a foundation for trading applications.

[![Vercel Deploy Status](https://vercel.com/button)](https://vercel.com/import/project?template=sisovin/stock_tracker)
![TypeScript](https://img.shields.io/badge/language-Typescript-blue)
![PostgreSQL](https://img.shields.io/badge/database-PostgreSQL-blue)
![License](https://img.shields.io/github/license/sisovin/stock_tracker)

---

## 🚀 Features

- **Real-time Stock Quotes:** Get live prices, historical data, and technical indicators for any stock symbol using the Yahoo Finance API.
- **Portfolio & Watchlist Management:** Track multiple portfolios, simulate trades, and monitor watchlists with instant updates.
- **Secure Authentication:** Next-Auth integration with Google, GitHub, and email providers.
- **Interactive Dashboard:** Responsive UI with charts, tickers, market overview, and live activity feed.
- **Custom Alerts & Notifications:** Set price alerts, receive notifications, and manage preferences.
- **Robust Data Infrastructure:** WebSocket-powered real-time updates, scheduled jobs, data validation, and error handling.
- **Advanced Testing & Deployment:** CI/CD pipeline, automated tests, error boundaries, production-grade monitoring, and analytics.

---

## 🗂️ Tech Stack

- **Frontend:** Next.js 15, React 19, Tailwind CSS v4, Shadcn/UI, TanStack Query, Zod, Lightweight Charts/Recharts
- **Backend:** Next.js API routes, Yahoo Finance API, Prisma ORM, PostgreSQL (Vercel Postgres/Supabase/Neon), Socket.io, node-cron
- **Authentication:** Next-Auth
- **Testing:** Jest, Playwright
- **Deployment:** Vercel, CI/CD, Analytics (Google & Vercel)
- **Bonus/Future:** AI/ML model integration for stock prediction

---

## 📋 Project Roadmap

Below is the complete development roadmap, broken down into actionable phases and tasks. Track progress by checking off completed items!

### **Phase 1: Foundation & Data Ingestion Setup**

<details>
<summary>Project Setup & Configuration</summary>

- [ ] Initialize Next.js 15.5.2 project with App Router
- [ ] Install and configure Tailwind CSS v4
- [ ] Set up Shadcn/UI component library
- [ ] Configure basic project structure and layout
- [ ] Set up development environment and tools
</details>

<details>
<summary>Backend API Development</summary>

- [ ] Create API route structure in `app/api/` directory
- [ ] Install and configure Yahoo Finance API client (`yahoo-finance2`)
- [ ] Implement stock search endpoint: `GET /api/stocks/search`
- [ ] Implement real-time quote endpoint: `GET /api/stocks/[symbol]/quote`
- [ ] Implement historical data endpoint: `GET /api/stocks/[symbol]/history`
- [ ] Add error handling and rate limiting to API routes
- [ ] Create API documentation and response schemas
</details>

<details>
<summary>Real-time Data Infrastructure</summary>

- [ ] Set up WebSocket server with Socket.io
- [ ] Implement real-time connection handler
- [ ] Create stock price update broadcasting system
- [ ] Develop client-side WebSocket connection manager
- [ ] Implement connection health monitoring
</details>

---

### **Phase 2: Data Storage & Processing Logic**

<details>
<summary>Database Setup</summary>

- [ ] Set up PostgreSQL database (Vercel Postgres/Supabase/Neon)
- [ ] Design and create database schema
- [ ] Set up database connection configuration
- [ ] Create database migration scripts
- [ ] Set up database seeding for development
</details>

<details>
<summary>Data Models & ORM</summary>

- [ ] Install and configure Prisma ORM
- [ ] Define User model with authentication fields
- [ ] Define Watchlist model and relationships
- [ ] Define Portfolio and Trade models
- [ ] Define StockHistory model for historical data
- [ ] Set up database indexes for performance
</details>

<details>
<summary>Data Processing Implementation</summary>

- [ ] Implement real-time data transformation functions
- [ ] Create price change percentage calculator
- [ ] Develop intraday high/low tracking
- [ ] Implement batch data processing for historical updates
- [ ] Create data validation and sanitization utilities
</details>

<details>
<summary>Scheduled Jobs</summary>

- [ ] Set up node-cron for scheduled tasks
- [ ] Implement end-of-day data collection job
- [ ] Create technical indicator calculation jobs
- [ ] Develop data cleanup and maintenance jobs
- [ ] Set up job logging and monitoring
</details>

---

### **Phase 3: Frontend Development & Data Consumption**

<details>
<summary>Authentication System</summary>

- [ ] Install and configure Next-Auth
- [ ] Implement authentication providers (Google/GitHub/Email)
- [ ] Create login/signup pages and components
- [ ] Set up protected route middleware
- [ ] Implement session management
</details>

<details>
<summary>Core UI Components</summary>

- [ ] Build responsive main layout with header/sidebar
- [ ] Create reusable stock card component
- [ ] Develop search component with autocomplete
- [ ] Build watchlist display component
- [ ] Create portfolio summary component
- [ ] Develop real-time price ticker component
</details>

<details>
<summary>Dashboard Development</summary>

- [ ] Create main dashboard page layout
- [ ] Implement watchlist section with real-time updates
- [ ] Build portfolio overview with P&L calculations
- [ ] Develop market overview section
- [ ] Create recent activity feed
</details>

<details>
<summary>Stock Detail Pages</summary>

- [ ] Implement dynamic route `app/stocks/[symbol]/page.tsx`
- [ ] Integrate charting library (Lightweight Charts/Recharts)
- [ ] Build real-time quote panel
- [ ] Create key statistics display
- [ ] Develop buy/sell interface component
- [ ] Implement news feed section
</details>

<details>
<summary>Advanced Features</summary>

- [ ] Create price alert system interface
- [ ] Implement alert creation/management components
- [ ] Develop notification system (toasts)
- [ ] Build settings and preferences page
- [ ] Create user profile management
</details>

---

### **Phase 4: Polish, Testing & Deployment**

<details>
<summary>State Management & Performance</summary>

- [ ] Implement TanStack Query for server state
- [ ] Set up React 19 `use` hook and `Suspense` integration
- [ ] Configure client-side caching strategies
- [ ] Implement Zod for runtime type validation
- [ ] Optimize bundle size and loading performance
</details>

<details>
<summary>Testing Implementation</summary>

- [ ] Set up Jest testing framework
- [ ] Write unit tests for data transformation functions
- [ ] Create component tests for critical UI components
- [ ] Implement API endpoint integration tests
- [ ] Set up end-to-end testing with Playwright
- [ ] Configure test coverage reporting
</details>

<details>
<summary>Error Handling & Validation</summary>

- [ ] Implement comprehensive error boundaries
- [ ] Create custom error pages (404, 500)
- [ ] Add form validation throughout application
- [ ] Implement loading states and skeletons
- [ ] Create error logging and monitoring
</details>

<details>
<summary>Production Deployment</summary>

- [ ] Set up production environment variables
- [ ] Configure Vercel deployment settings
- [ ] Set up production PostgreSQL database
- [ ] Configure domain and SSL certificate
- [ ] Implement CI/CD pipeline
- [ ] Set up performance monitoring (Vercel Analytics)
</details>

<details>
<summary>Post-Launch Tasks</summary>

- [ ] Set up analytics (Google Analytics/Vercel Analytics)
- [ ] Implement SEO optimization
- [ ] Create documentation and user guides
- [ ] Set up backup and recovery procedures
- [ ] Plan for scaling and performance optimization
</details>

---

### **Bonus: AI/ML Features (Future Phase)**

<details>
<summary>AI/ML Integration (Planned)</summary>

- [ ] Research and select ML model for stock predictions
- [ ] Set up ML model training pipeline
- [ ] Create API endpoints for prediction data
- [ ] Build prediction display components
- [ ] Implement model performance monitoring
</details>

---

## 🗃️ Folder Structure

```text
app/
  api/               # Next.js API routes (data ingestion, stock endpoints)
  stocks/            # Dynamic stock detail pages
  dashboard/         # Main dashboard UI
  components/        # Shadcn/UI & custom components
  lib/               # Utilities, helpers
  db/                # Prisma schema, migrations
public/              # Static assets
prisma/              # ORM schema and migrations
tests/               # Unit, integration, and E2E tests
```

---

## 🛠️ Getting Started

1. **Clone the repo**
    ```bash
    git clone https://github.com/sisovin/stock_tracker.git
    cd stock_tracker
    ```

2. **Install dependencies**
    ```bash
    pnpm install
    # or
    npm install
    ```

3. **Set up environment variables**
    - Copy `.env.example` to `.env.local` and fill in required keys (API, database, etc.).

4. **Run locally**
    ```bash
    pnpm dev
    # or
    npm run dev
    ```

5. **Database setup**
    ```bash
    pnpm prisma migrate dev
    # or
    npx prisma migrate dev
    ```

---

## 🧪 Testing

- **Run unit & integration tests**
    ```bash
    pnpm test
    # or
    npm test
    ```
- **E2E tests**
    ```bash
    pnpm playwright test
    # or
    npm run playwright test
    ```

---

## 📚 Documentation

- [API Docs](docs/api.md) – Endpoints, authentication, and data schemas
- [User Guide](docs/user-guide.md) – How to use the dashboard, features, and alerts
- [Contributing](CONTRIBUTING.md) – How to contribute, code style, and PR guidelines

---

## 💡 Contributing

All contributions are welcome! Please check [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines and open an issue or PR to get started.

---

## 📄 License

MIT License © [sisovin](https://github.com/sisovin)

---

## 🌟 Acknowledgements

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Shadcn/UI](https://ui.shadcn.com/)
- [Yahoo Finance API](https://github.com/gadicc/node-yahoo-finance2)
- [Prisma](https://www.prisma.io/)
- [Supabase](https://supabase.com/)
- [Vercel](https://vercel.com/)

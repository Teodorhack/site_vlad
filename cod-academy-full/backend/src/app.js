require("dotenv").config();

const express = require("express");
const path = require("path");
const cors = require("cors");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");
const rateLimit = require("express-rate-limit");
const { initDatabase } = require("./config/database");

const authRoutes = require("./routes/auth");
const modulesRoutes = require("./routes/modules");
const progressRoutes = require("./routes/progress");
const calculatorRoutes = require("./routes/calculator");
const adminRoutes = require("./routes/admin");
const commentsRoutes = require("./routes/comments");

const app = express();
const PORT = process.env.PORT || 3000;

// ── Frontend path ─────────────────────────────────────
const FRONTEND = path.resolve(__dirname, "../../frontend");

// ── Security ──────────────────────────────────────────
app.use(helmet({
  contentSecurityPolicy: false,
  crossOriginEmbedderPolicy: false,
  crossOriginResourcePolicy: false,
}));
app.use(cors({
  origin: [
    "http://localhost:3000",
    "http://localhost:5500",
    "http://127.0.0.1:5500",
  ],
  credentials: true,
}));

// ── Rate limiting ─────────────────────────────────────
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 20,
  message: { error: "Prea multe incercari. Asteapta 15 minute." },
});

const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 200,
  message: { error: "Rate limit atins." },
});

// ── Parsers ───────────────────────────────────────────
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// ── API Routes ────────────────────────────────────────
app.use("/api/auth", authLimiter, authRoutes);
app.use("/api", apiLimiter, modulesRoutes);
app.use("/api/progress", apiLimiter, progressRoutes);
app.use("/api/calculator", apiLimiter, calculatorRoutes);
app.use("/api/admin", apiLimiter, adminRoutes);
app.use("/api/comments", apiLimiter, commentsRoutes);

app.get("/api/health", (req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

// ── Root → landing page (before static) ──────────────
app.get("/", (req, res) => {
  res.sendFile(path.join(FRONTEND, "landing.html"), (err) => {
    if (err) res.sendFile(path.join(FRONTEND, "login.html"));
  });
});

// ── Serve Frontend ────────────────────────────────────
app.use(express.static(FRONTEND));

// Fallback: non-API GET requests → login
app.use((req, res, next) => {
  if (req.path.startsWith("/api")) return next();
  if (req.method !== "GET") return next();
  res.sendFile(path.join(FRONTEND, "login.html"), (err) => {
    if (err) next();
  });
});

// ── 404 for API ───────────────────────────────────────
app.use((req, res) => {
  res.status(404).json({ error: "Ruta inexistenta." });
});

// ── Error handler ─────────────────────────────────────
app.use((err, req, res, next) => {
  console.error("Server error:", err);
  res.status(500).json({ error: "Eroare interna." });
});

// ── Global error safety net ──────────────────────────
process.on("uncaughtException", (err) => {
  console.error("Uncaught Exception:", err);
});

process.on("unhandledRejection", (reason) => {
  console.error("Unhandled Rejection:", reason);
});

// ── Start ─────────────────────────────────────────────
async function start() {
  try {
    await initDatabase();
    app.listen(PORT, () => {
      console.log(`\n🎮 COD-ACADEMY`);
      console.log(`   http://localhost:${PORT}`);
      console.log(`   Frontend: ${FRONTEND}`);
      console.log(`   Env: ${process.env.NODE_ENV || "development"}\n`);
    });
  } catch (err) {
    console.error("Failed to start:", err);
    process.exit(1);
  }
}

start();

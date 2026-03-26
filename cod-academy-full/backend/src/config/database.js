const initSqlJs = require("sql.js");
const fs = require("fs");
const path = require("path");

const DB_PATH = path.resolve(process.env.DB_PATH || "./database.sqlite");

let db = null;

async function initDatabase() {
  const SQL = await initSqlJs();

  // Load existing DB or create new one
  if (fs.existsSync(DB_PATH)) {
    const buffer = fs.readFileSync(DB_PATH);
    db = new SQL.Database(buffer);
  } else {
    db = new SQL.Database();
  }

  // Create tables
  db.run(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT UNIQUE NOT NULL,
      email TEXT UNIQUE NOT NULL,
      password TEXT NOT NULL,
      display_name TEXT,
      avatar_url TEXT,
      role TEXT DEFAULT 'student' CHECK(role IN ('student', 'admin', 'instructor')),
      is_active INTEGER DEFAULT 1,
      created_at TEXT DEFAULT (datetime('now')),
      updated_at TEXT DEFAULT (datetime('now')),
      last_login TEXT
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS refresh_tokens (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER NOT NULL,
      token TEXT UNIQUE NOT NULL,
      expires_at TEXT NOT NULL,
      created_at TEXT DEFAULT (datetime('now')),
      FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS modules (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      module_number INTEGER UNIQUE NOT NULL,
      title TEXT NOT NULL,
      description TEXT,
      icon TEXT,
      is_locked INTEGER DEFAULT 0,
      order_index INTEGER DEFAULT 0,
      created_at TEXT DEFAULT (datetime('now'))
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS lessons (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      module_id INTEGER NOT NULL,
      title TEXT NOT NULL,
      slug TEXT UNIQUE NOT NULL,
      content TEXT,
      lesson_type TEXT DEFAULT 'text' CHECK(lesson_type IN ('text', 'video', 'quiz', 'practice')),
      duration_minutes INTEGER DEFAULT 0,
      order_index INTEGER DEFAULT 0,
      is_free INTEGER DEFAULT 0,
      created_at TEXT DEFAULT (datetime('now')),
      FOREIGN KEY (module_id) REFERENCES modules(id) ON DELETE CASCADE
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS user_progress (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER NOT NULL,
      lesson_id INTEGER NOT NULL,
      module_id INTEGER NOT NULL,
      status TEXT DEFAULT 'not_started' CHECK(status IN ('not_started', 'in_progress', 'completed')),
      score INTEGER DEFAULT 0,
      time_spent_seconds INTEGER DEFAULT 0,
      completed_at TEXT,
      updated_at TEXT DEFAULT (datetime('now')),
      FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
      FOREIGN KEY (lesson_id) REFERENCES lessons(id) ON DELETE CASCADE,
      FOREIGN KEY (module_id) REFERENCES modules(id) ON DELETE CASCADE,
      UNIQUE(user_id, lesson_id)
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS profit_calculations (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER NOT NULL,
      title TEXT,
      investment REAL NOT NULL,
      revenue REAL NOT NULL,
      profit REAL NOT NULL,
      margin REAL NOT NULL,
      notes TEXT,
      created_at TEXT DEFAULT (datetime('now')),
      FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS comments (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER NOT NULL,
      lesson_id INTEGER NOT NULL,
      text TEXT NOT NULL,
      created_at TEXT DEFAULT (datetime('now')),
      FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS password_resets (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER NOT NULL,
      token TEXT UNIQUE NOT NULL,
      expires_at TEXT NOT NULL,
      used INTEGER DEFAULT 0,
      created_at TEXT DEFAULT (datetime('now')),
      FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS user_settings (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER UNIQUE NOT NULL,
      theme TEXT DEFAULT 'dark',
      notifications_enabled INTEGER DEFAULT 1,
      sidebar_collapsed INTEGER DEFAULT 0,
      language TEXT DEFAULT 'ro',
      FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
    )
  `);

  // Seed modules if empty
  const count = db.exec("SELECT COUNT(*) as c FROM modules");
  if (count[0].values[0][0] === 0) {
    seedModules();
  }

  saveDatabase();
  console.log("✅ Database initialized successfully");
  return db;
}

function seedModules() {
  const modules = [
    { num: 1, title: "Introducere în COD", desc: "Bazele platformei și cum să începi" },
    { num: 2, title: "Fundamentele Trading-ului", desc: "Concepte de bază în trading" },
    { num: 3, title: "Analiza Tehnică", desc: "Grafice, indicatori și pattern-uri" },
    { num: 4, title: "Analiza Fundamentală", desc: "Evaluarea activelor și a piețelor" },
    { num: 5, title: "Managementul Riscului", desc: "Protejarea capitalului și gestionarea pierderilor" },
    { num: 6, title: "Strategii de Trading", desc: "Strategii testate și optimizate" },
    { num: 7, title: "Psihologia Trading-ului", desc: "Mindset și disciplină" },
    { num: 8, title: "Piețe Forex", desc: "Tranzacționarea valutelor" },
    { num: 9, title: "Crypto Trading", desc: "Piața criptomonedelor" },
    { num: 10, title: "Trading Avansat", desc: "Tehnici avansate și algoritmi" },
    { num: 11, title: "Profit & Portfolio", desc: "Managementul portofoliului" },
    { num: 12, title: "Masterclass", desc: "Lecții finale și certificare" },
  ];

  const stmt = db.prepare(
    "INSERT INTO modules (module_number, title, description, order_index) VALUES (?, ?, ?, ?)"
  );

  modules.forEach((m, i) => {
    stmt.run([m.num, m.title, m.desc, i]);
  });
  stmt.free();
}

function saveDatabase() {
  const data = db.export();
  const buffer = Buffer.from(data);
  fs.writeFileSync(DB_PATH, buffer);
}

function getDb() {
  if (!db) throw new Error("Database not initialized");
  return db;
}

// Auto-save every 30 seconds
setInterval(() => {
  if (db) saveDatabase();
}, 30000);

// Save on exit
process.on("SIGINT", () => {
  if (db) {
    saveDatabase();
    db.close();
  }
  process.exit(0);
});

module.exports = { initDatabase, getDb, saveDatabase };

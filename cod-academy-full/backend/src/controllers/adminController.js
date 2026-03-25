const bcrypt = require("bcryptjs");
const { getDb, saveDatabase } = require("../config/database");

// PUT /api/admin/users/:id/reset-password
async function resetUserPassword(req, res) {
  try {
    const { password } = req.body;
    if (!password || password.length < 6) {
      return res.status(400).json({ error: "Parola: minim 6 caractere." });
    }
    const hashed = await bcrypt.hash(password, 12);
    const db = getDb();
    db.run("UPDATE users SET password = ?, updated_at = datetime('now') WHERE id = ?", [hashed, req.params.id]);
    saveDatabase();
    res.json({ message: "Parola a fost resetată." });
  } catch (err) {
    res.status(500).json({ error: "Eroare la resetare parolă." });
  }
}

// GET /api/admin/users
function getUsers(req, res) {
  try {
    const db = getDb();
    const result = db.exec(`
      SELECT id, username, email, display_name, role, is_active, created_at, last_login
      FROM users ORDER BY created_at DESC
    `);

    if (!result.length) return res.json({ users: [] });

    const cols = result[0].columns;
    const users = result[0].values.map(row => {
      const obj = {};
      cols.forEach((col, i) => obj[col] = row[i]);
      return obj;
    });

    res.json({ users, total: users.length });
  } catch (err) {
    res.status(500).json({ error: "Eroare server." });
  }
}

// PUT /api/admin/users/:id/role
function updateUserRole(req, res) {
  try {
    const { role } = req.body;
    if (!["student", "admin", "instructor"].includes(role)) {
      return res.status(400).json({ error: "Rol invalid." });
    }
    const db = getDb();
    db.run("UPDATE users SET role = ?, updated_at = datetime('now') WHERE id = ?", [role, req.params.id]);
    saveDatabase();
    res.json({ message: "Rol actualizat." });
  } catch (err) {
    res.status(500).json({ error: "Eroare server." });
  }
}

// PUT /api/admin/users/:id/toggle
function toggleUser(req, res) {
  try {
    const db = getDb();
    db.run("UPDATE users SET is_active = NOT is_active, updated_at = datetime('now') WHERE id = ?", [req.params.id]);
    saveDatabase();
    res.json({ message: "Status utilizator schimbat." });
  } catch (err) {
    res.status(500).json({ error: "Eroare server." });
  }
}

// GET /api/admin/stats
function getStats(req, res) {
  try {
    const db = getDb();

    const users = db.exec("SELECT COUNT(*) FROM users")[0].values[0][0];
    const active = db.exec("SELECT COUNT(*) FROM users WHERE is_active = 1")[0].values[0][0];
    const modules = db.exec("SELECT COUNT(*) FROM modules")[0].values[0][0];
    const lessons = db.exec("SELECT COUNT(*) FROM lessons")[0].values[0][0];
    const completions = db.exec("SELECT COUNT(*) FROM user_progress WHERE status = 'completed'")[0].values[0][0];

    res.json({ stats: { users, active_users: active, modules, lessons, total_completions: completions } });
  } catch (err) {
    res.status(500).json({ error: "Eroare server." });
  }
}

module.exports = { getUsers, updateUserRole, toggleUser, getStats, resetUserPassword };

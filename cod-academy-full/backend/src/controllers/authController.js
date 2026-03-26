const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const { getDb, saveDatabase } = require("../config/database");

function generateAccessToken(userId) {
  return jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN || "15m",
  });
}

function generateRefreshToken(userId) {
  const token = crypto.randomBytes(40).toString("hex");
  const db = getDb();

  // Calculate expiry (7 days)
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString();

  db.run("INSERT INTO refresh_tokens (user_id, token, expires_at) VALUES (?, ?, ?)", [
    userId, token, expiresAt,
  ]);
  saveDatabase();

  return token;
}

// POST /api/auth/register
async function register(req, res) {
  try {
    const { username, email, password, display_name } = req.body;
    const db = getDb();

    // Check existing
    const existing = db.exec(
      "SELECT id FROM users WHERE username = ? OR email = ?",
      [username, email]
    );
    if (existing.length && existing[0].values.length) {
      return res.status(409).json({ error: "Username sau email deja existent." });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    db.run(
      "INSERT INTO users (username, email, password, display_name) VALUES (?, ?, ?, ?)",
      [username, email, hashedPassword, display_name || username]
    );

    const result = db.exec("SELECT last_insert_rowid()");
    const userId = result[0].values[0][0];

    // Create default settings
    db.run("INSERT OR IGNORE INTO user_settings (user_id) VALUES (?)", [userId]);
    saveDatabase();

    const accessToken = generateAccessToken(userId);
    const refreshToken = generateRefreshToken(userId);

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    res.status(201).json({
      message: "Cont creat cu succes!",
      user: { id: userId, username, email, display_name: display_name || username, role: "student" },
      accessToken,
    });
  } catch (err) {
    console.error("Register error:", err);
    res.status(500).json({ error: "Eroare la înregistrare." });
  }
}

// POST /api/auth/login
async function login(req, res) {
  try {
    const { login: loginField, password } = req.body;
    const db = getDb();

    const result = db.exec(
      "SELECT id, username, email, password, display_name, role, is_active FROM users WHERE username = ? OR email = ?",
      [loginField, loginField]
    );

    if (!result.length || !result[0].values.length) {
      return res.status(401).json({ error: "Credențiale invalide." });
    }

    const user = result[0].values[0];
    const [id, username, email, hashedPw, display_name, role, is_active] = user;

    if (!is_active) {
      return res.status(403).json({ error: "Cont dezactivat." });
    }

    const validPassword = await bcrypt.compare(password, hashedPw);
    if (!validPassword) {
      return res.status(401).json({ error: "Credențiale invalide." });
    }

    // Update last login
    db.run("UPDATE users SET last_login = datetime('now') WHERE id = ?", [id]);
    saveDatabase();

    const accessToken = generateAccessToken(id);
    const refreshToken = generateRefreshToken(id);

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    res.json({
      message: "Autentificare reușită!",
      user: { id, username, email, display_name, role },
      accessToken,
    });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ error: "Eroare la autentificare." });
  }
}

// POST /api/auth/refresh
function refresh(req, res) {
  try {
    const token = req.cookies?.refreshToken || req.body?.refreshToken;
    if (!token) {
      return res.status(401).json({ error: "Refresh token lipsă." });
    }

    const db = getDb();
    const result = db.exec(
      "SELECT id, user_id, expires_at FROM refresh_tokens WHERE token = ?",
      [token]
    );

    if (!result.length || !result[0].values.length) {
      return res.status(401).json({ error: "Refresh token invalid." });
    }

    const [tokenId, userId, expiresAt] = result[0].values[0];

    if (new Date(expiresAt) < new Date()) {
      db.run("DELETE FROM refresh_tokens WHERE id = ?", [tokenId]);
      saveDatabase();
      return res.status(401).json({ error: "Refresh token expirat." });
    }

    // Delete old, create new (rotation)
    db.run("DELETE FROM refresh_tokens WHERE id = ?", [tokenId]);

    const accessToken = generateAccessToken(userId);
    const newRefreshToken = generateRefreshToken(userId);

    res.cookie("refreshToken", newRefreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    res.json({ accessToken });
  } catch (err) {
    console.error("Refresh error:", err);
    res.status(500).json({ error: "Eroare la refresh." });
  }
}

// POST /api/auth/logout
function logout(req, res) {
  try {
    const token = req.cookies?.refreshToken;
    if (token) {
      const db = getDb();
      db.run("DELETE FROM refresh_tokens WHERE token = ?", [token]);
      saveDatabase();
    }

    res.clearCookie("refreshToken");
    res.json({ message: "Deconectare reușită." });
  } catch (err) {
    res.status(500).json({ error: "Eroare la deconectare." });
  }
}

// GET /api/auth/me
function getMe(req, res) {
  try {
    const db = getDb();
    const result = db.exec(
      "SELECT id, username, email, display_name, avatar_url, role, created_at, last_login FROM users WHERE id = ?",
      [req.user.id]
    );

    if (!result.length || !result[0].values.length) {
      return res.status(404).json({ error: "Utilizator negăsit." });
    }

    const [id, username, email, display_name, avatar_url, role, created_at, last_login] = result[0].values[0];

    res.json({
      user: { id, username, email, display_name, avatar_url, role, created_at, last_login },
    });
  } catch (err) {
    res.status(500).json({ error: "Eroare server." });
  }
}

// PUT /api/auth/profile
async function updateProfile(req, res) {
  try {
    const { display_name, email, current_password, new_password } = req.body;
    const db = getDb();

    if (new_password) {
      if (!current_password) {
        return res.status(400).json({ error: "Parola curentă necesară." });
      }
      const result = db.exec("SELECT password FROM users WHERE id = ?", [req.user.id]);
      const valid = await bcrypt.compare(current_password, result[0].values[0][0]);
      if (!valid) {
        return res.status(401).json({ error: "Parola curentă incorectă." });
      }
      const hashed = await bcrypt.hash(new_password, 12);
      db.run("UPDATE users SET password = ?, updated_at = datetime('now') WHERE id = ?", [hashed, req.user.id]);
    }

    if (display_name) {
      db.run("UPDATE users SET display_name = ?, updated_at = datetime('now') WHERE id = ?", [display_name, req.user.id]);
    }
    if (email) {
      const exists = db.exec("SELECT id FROM users WHERE email = ? AND id != ?", [email, req.user.id]);
      if (exists.length && exists[0].values.length) {
        return res.status(409).json({ error: "Email deja folosit." });
      }
      db.run("UPDATE users SET email = ?, updated_at = datetime('now') WHERE id = ?", [email, req.user.id]);
    }

    saveDatabase();
    res.json({ message: "Profil actualizat." });
  } catch (err) {
    res.status(500).json({ error: "Eroare la actualizare." });
  }
}

// POST /api/auth/forgot-password
function forgotPassword(req, res) {
  try {
    const { email } = req.body;
    if (!email) return res.status(400).json({ error: "Email necesar." });

    const db = getDb();
    const result = db.exec("SELECT id FROM users WHERE email = ?", [email]);

    // Always return success (don't reveal if email exists)
    if (!result.length || !result[0].values.length) {
      return res.json({ message: "Dacă emailul există, vei primi instrucțiuni de resetare." });
    }

    const userId = result[0].values[0][0];
    const token = crypto.randomBytes(32).toString("hex");
    const expiresAt = new Date(Date.now() + 60 * 60 * 1000).toISOString(); // 1 hour

    // Store reset token
    db.run("INSERT INTO password_resets (user_id, token, expires_at) VALUES (?, ?, ?)",
      [userId, token, expiresAt]);
    saveDatabase();

    // In production, send email with reset link
    // For now, log the token (admin can also reset via admin panel)
    console.log(`\n🔐 Password reset token for user ${userId}: ${token}`);
    console.log(`   Reset URL: http://localhost:3000/reset-password.html?token=${token}\n`);

    res.json({ message: "Dacă emailul există, vei primi instrucțiuni de resetare." });
  } catch (err) {
    console.error("Forgot password error:", err);
    res.status(500).json({ error: "Eroare server." });
  }
}

// POST /api/auth/reset-password
async function resetPassword(req, res) {
  try {
    const { token, password } = req.body;
    if (!token || !password) return res.status(400).json({ error: "Token și parolă necesare." });
    if (password.length < 6) return res.status(400).json({ error: "Parola: minim 6 caractere." });

    const db = getDb();

    // Check token
    const result = db.exec(
      "SELECT id, user_id, expires_at, used FROM password_resets WHERE token = ?",
      [token]
    );

    if (!result.length || !result[0].values.length) {
      return res.status(400).json({ error: "Link invalid sau expirat." });
    }

    const [resetId, userId, expiresAt, used] = result[0].values[0];

    if (used) return res.status(400).json({ error: "Acest link a fost deja folosit." });
    if (new Date(expiresAt) < new Date()) return res.status(400).json({ error: "Link expirat." });

    // Update password
    const hashed = await bcrypt.hash(password, 12);
    db.run("UPDATE users SET password = ?, updated_at = datetime('now') WHERE id = ?", [hashed, userId]);
    db.run("UPDATE password_resets SET used = 1 WHERE id = ?", [resetId]);
    saveDatabase();

    res.json({ message: "Parola a fost schimbată. Te poți autentifica." });
  } catch (err) {
    console.error("Reset password error:", err);
    res.status(500).json({ error: "Eroare server." });
  }
}

module.exports = { register, login, refresh, logout, getMe, updateProfile, forgotPassword, resetPassword };

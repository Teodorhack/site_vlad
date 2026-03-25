const jwt = require("jsonwebtoken");
const { getDb } = require("../config/database");

// Verify JWT token
function authenticate(req, res, next) {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.startsWith("Bearer ")
    ? authHeader.split(" ")[1]
    : req.cookies?.accessToken;

  if (!token) {
    return res.status(401).json({ error: "Acces neautorizat. Token lipsă." });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const db = getDb();
    const result = db.exec("SELECT id, username, email, role, is_active FROM users WHERE id = ?", [decoded.userId]);

    if (!result.length || !result[0].values.length) {
      return res.status(401).json({ error: "Utilizator inexistent." });
    }

    const user = result[0].values[0];
    if (!user[4]) {
      return res.status(403).json({ error: "Cont dezactivat." });
    }

    req.user = {
      id: user[0],
      username: user[1],
      email: user[2],
      role: user[3],
    };
    next();
  } catch (err) {
    if (err.name === "TokenExpiredError") {
      return res.status(401).json({ error: "Token expirat.", code: "TOKEN_EXPIRED" });
    }
    return res.status(401).json({ error: "Token invalid." });
  }
}

// Check role
function authorize(...roles) {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({ error: "Neautentificat." });
    }
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ error: "Nu ai permisiunea necesară." });
    }
    next();
  };
}

// Optional auth - doesn't fail if no token
function optionalAuth(req, res, next) {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.startsWith("Bearer ")
    ? authHeader.split(" ")[1]
    : req.cookies?.accessToken;

  if (!token) return next();

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const db = getDb();
    const result = db.exec("SELECT id, username, email, role FROM users WHERE id = ? AND is_active = 1", [decoded.userId]);

    if (result.length && result[0].values.length) {
      const user = result[0].values[0];
      req.user = { id: user[0], username: user[1], email: user[2], role: user[3] };
    }
  } catch (_) {
    // ignore - optional
  }
  next();
}

module.exports = { authenticate, authorize, optionalAuth };

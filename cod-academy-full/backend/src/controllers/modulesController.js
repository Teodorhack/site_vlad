const { getDb, saveDatabase } = require("../config/database");

// GET /api/modules
function getModules(req, res) {
  try {
    const db = getDb();
    const result = db.exec("SELECT * FROM modules ORDER BY order_index, module_number");

    if (!result.length) return res.json({ modules: [] });

    const cols = result[0].columns;
    const modules = result[0].values.map(row => {
      const obj = {};
      cols.forEach((col, i) => obj[col] = row[i]);
      return obj;
    });

    res.json({ modules });
  } catch (err) {
    res.status(500).json({ error: "Eroare server." });
  }
}

// GET /api/modules/:id
function getModule(req, res) {
  try {
    const db = getDb();
    const result = db.exec(
      "SELECT * FROM modules WHERE id = ? OR module_number = ?",
      [req.params.id, req.params.id]
    );

    if (!result.length || !result[0].values.length) {
      return res.status(404).json({ error: "Modul negăsit." });
    }

    const cols = result[0].columns;
    const module = {};
    cols.forEach((col, i) => module[col] = result[0].values[0][i]);

    // Get lessons
    const lessons = db.exec(
      "SELECT id, title, slug, lesson_type, duration_minutes, order_index, is_free FROM lessons WHERE module_id = ? ORDER BY order_index",
      [module.id]
    );

    module.lessons = [];
    if (lessons.length) {
      const lCols = lessons[0].columns;
      module.lessons = lessons[0].values.map(row => {
        const obj = {};
        lCols.forEach((col, i) => obj[col] = row[i]);
        return obj;
      });
    }

    res.json({ module });
  } catch (err) {
    res.status(500).json({ error: "Eroare server." });
  }
}

// GET /api/lessons/:slug
function getLesson(req, res) {
  try {
    const db = getDb();
    const result = db.exec(
      `SELECT l.*, m.title as module_title, m.module_number
       FROM lessons l JOIN modules m ON l.module_id = m.id
       WHERE l.slug = ?`,
      [req.params.slug]
    );

    if (!result.length || !result[0].values.length) {
      return res.status(404).json({ error: "Lecție negăsită." });
    }

    const cols = result[0].columns;
    const lesson = {};
    cols.forEach((col, i) => lesson[col] = result[0].values[0][i]);

    res.json({ lesson });
  } catch (err) {
    res.status(500).json({ error: "Eroare server." });
  }
}

// POST /api/modules (admin)
function createModule(req, res) {
  try {
    const { module_number, title, description, icon } = req.body;
    const db = getDb();

    db.run(
      "INSERT INTO modules (module_number, title, description, icon, order_index) VALUES (?, ?, ?, ?, ?)",
      [module_number, title, description, icon, module_number]
    );
    saveDatabase();

    const result = db.exec("SELECT last_insert_rowid()");
    res.status(201).json({ message: "Modul creat.", id: result[0].values[0][0] });
  } catch (err) {
    res.status(500).json({ error: "Eroare la creare modul." });
  }
}

// POST /api/lessons (admin)
function createLesson(req, res) {
  try {
    const { module_id, title, slug, content, lesson_type, duration_minutes, order_index, is_free } = req.body;
    const db = getDb();

    db.run(
      `INSERT INTO lessons (module_id, title, slug, content, lesson_type, duration_minutes, order_index, is_free)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      [module_id, title, slug, content, lesson_type || "text", duration_minutes || 0, order_index || 0, is_free ? 1 : 0]
    );
    saveDatabase();

    const result = db.exec("SELECT last_insert_rowid()");
    res.status(201).json({ message: "Lecție creată.", id: result[0].values[0][0] });
  } catch (err) {
    res.status(500).json({ error: "Eroare la creare lecție." });
  }
}

module.exports = { getModules, getModule, getLesson, createModule, createLesson };

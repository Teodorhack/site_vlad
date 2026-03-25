const { getDb, saveDatabase } = require("../config/database");

// GET /api/progress
function getUserProgress(req, res) {
  try {
    const db = getDb();
    const result = db.exec(`
      SELECT 
        up.id, up.lesson_id, up.module_id, up.status, up.score,
        up.time_spent_seconds, up.completed_at,
        l.title as lesson_title, l.slug,
        m.title as module_title, m.module_number
      FROM user_progress up
      JOIN lessons l ON up.lesson_id = l.id
      JOIN modules m ON up.module_id = m.id
      WHERE up.user_id = ?
      ORDER BY m.module_number, l.order_index
    `, [req.user.id]);

    if (!result.length) return res.json({ progress: [], stats: { total: 0, completed: 0, percentage: 0 } });

    const cols = result[0].columns;
    const rows = result[0].values.map(row => {
      const obj = {};
      cols.forEach((col, i) => obj[col] = row[i]);
      return obj;
    });

    const completed = rows.filter(r => r.status === "completed").length;
    const totalLessons = db.exec("SELECT COUNT(*) FROM lessons");
    const total = totalLessons[0].values[0][0];

    res.json({
      progress: rows,
      stats: {
        total,
        completed,
        in_progress: rows.filter(r => r.status === "in_progress").length,
        percentage: total > 0 ? Math.round((completed / total) * 100) : 0,
        total_time_seconds: rows.reduce((sum, r) => sum + (r.time_spent_seconds || 0), 0),
      },
    });
  } catch (err) {
    console.error("Progress error:", err);
    res.status(500).json({ error: "Eroare la încărcarea progresului." });
  }
}

// GET /api/progress/module/:moduleId
function getModuleProgress(req, res) {
  try {
    const db = getDb();
    const result = db.exec(`
      SELECT 
        up.lesson_id, up.status, up.score, up.time_spent_seconds, up.completed_at,
        l.title, l.slug, l.lesson_type, l.order_index
      FROM user_progress up
      JOIN lessons l ON up.lesson_id = l.id
      WHERE up.user_id = ? AND up.module_id = ?
      ORDER BY l.order_index
    `, [req.user.id, req.params.moduleId]);

    if (!result.length) return res.json({ lessons: [] });

    const cols = result[0].columns;
    const rows = result[0].values.map(row => {
      const obj = {};
      cols.forEach((col, i) => obj[col] = row[i]);
      return obj;
    });

    res.json({ lessons: rows });
  } catch (err) {
    res.status(500).json({ error: "Eroare server." });
  }
}

// POST /api/progress/update
function updateProgress(req, res) {
  try {
    const { lesson_id, module_id, status, score, time_spent_seconds } = req.body;
    const db = getDb();

    if (!lesson_id || !module_id) {
      return res.status(400).json({ error: "lesson_id și module_id sunt necesare." });
    }

    const existing = db.exec(
      "SELECT id FROM user_progress WHERE user_id = ? AND lesson_id = ?",
      [req.user.id, lesson_id]
    );

    if (existing.length && existing[0].values.length) {
      // Update
      const sets = [];
      const params = [];
      if (status) { sets.push("status = ?"); params.push(status); }
      if (score !== undefined) { sets.push("score = ?"); params.push(score); }
      if (time_spent_seconds) { sets.push("time_spent_seconds = time_spent_seconds + ?"); params.push(time_spent_seconds); }
      if (status === "completed") { sets.push("completed_at = datetime('now')"); }
      sets.push("updated_at = datetime('now')");
      params.push(req.user.id, lesson_id);

      db.run(`UPDATE user_progress SET ${sets.join(", ")} WHERE user_id = ? AND lesson_id = ?`, params);
    } else {
      // Insert
      db.run(
        `INSERT INTO user_progress (user_id, lesson_id, module_id, status, score, time_spent_seconds, completed_at)
         VALUES (?, ?, ?, ?, ?, ?, ?)`,
        [
          req.user.id, lesson_id, module_id,
          status || "in_progress",
          score || 0,
          time_spent_seconds || 0,
          status === "completed" ? new Date().toISOString() : null,
        ]
      );
    }

    saveDatabase();
    res.json({ message: "Progres actualizat." });
  } catch (err) {
    console.error("Update progress error:", err);
    res.status(500).json({ error: "Eroare la salvarea progresului." });
  }
}

// POST /api/progress/reset
function resetProgress(req, res) {
  try {
    const { module_id } = req.body;
    const db = getDb();

    if (module_id) {
      db.run("DELETE FROM user_progress WHERE user_id = ? AND module_id = ?", [req.user.id, module_id]);
    } else {
      db.run("DELETE FROM user_progress WHERE user_id = ?", [req.user.id]);
    }

    saveDatabase();
    res.json({ message: "Progres resetat." });
  } catch (err) {
    res.status(500).json({ error: "Eroare la resetare." });
  }
}

module.exports = { getUserProgress, getModuleProgress, updateProgress, resetProgress };

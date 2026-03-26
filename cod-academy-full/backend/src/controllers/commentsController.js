const { getDb, saveDatabase } = require("../config/database");

// POST /api/comments
function createComment(req, res) {
  try {
    const { lesson_id, text } = req.body;

    if (!lesson_id || !text || !text.trim()) {
      return res.status(400).json({ error: "lesson_id și text sunt necesare." });
    }

    const db = getDb();
    db.run(
      "INSERT INTO comments (user_id, lesson_id, text) VALUES (?, ?, ?)",
      [req.user.id, lesson_id, text.trim()]
    );
    saveDatabase();

    const result = db.exec("SELECT last_insert_rowid()");
    const commentId = result[0].values[0][0];

    res.status(201).json({
      message: "Comentariu adăugat.",
      comment: {
        id: commentId,
        user_id: req.user.id,
        username: req.user.username,
        lesson_id,
        text: text.trim(),
        created_at: new Date().toISOString(),
      },
    });
  } catch (err) {
    console.error("Create comment error:", err);
    res.status(500).json({ error: "Eroare la adăugarea comentariului." });
  }
}

// GET /api/comments/:lessonId
function getComments(req, res) {
  try {
    const db = getDb();
    const result = db.exec(
      `SELECT c.id, c.user_id, c.lesson_id, c.text, c.created_at,
              u.username, u.display_name, u.avatar_url
       FROM comments c
       JOIN users u ON c.user_id = u.id
       WHERE c.lesson_id = ?
       ORDER BY c.created_at DESC`,
      [req.params.lessonId]
    );

    if (!result.length) return res.json({ comments: [] });

    const cols = result[0].columns;
    const comments = result[0].values.map((row) => {
      const obj = {};
      cols.forEach((col, i) => (obj[col] = row[i]));
      return obj;
    });

    res.json({ comments });
  } catch (err) {
    console.error("Get comments error:", err);
    res.status(500).json({ error: "Eroare la încărcarea comentariilor." });
  }
}

// DELETE /api/comments/:id
function deleteComment(req, res) {
  try {
    const db = getDb();
    const commentId = req.params.id;

    // Check ownership or admin
    const result = db.exec(
      "SELECT user_id FROM comments WHERE id = ?",
      [commentId]
    );

    if (!result.length || !result[0].values.length) {
      return res.status(404).json({ error: "Comentariu negăsit." });
    }

    const ownerId = result[0].values[0][0];
    if (ownerId !== req.user.id && req.user.role !== "admin") {
      return res.status(403).json({ error: "Nu poți șterge acest comentariu." });
    }

    db.run("DELETE FROM comments WHERE id = ?", [commentId]);
    saveDatabase();

    res.json({ message: "Comentariu șters." });
  } catch (err) {
    console.error("Delete comment error:", err);
    res.status(500).json({ error: "Eroare la ștergerea comentariului." });
  }
}

module.exports = { createComment, getComments, deleteComment };

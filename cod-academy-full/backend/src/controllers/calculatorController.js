const { getDb, saveDatabase } = require("../config/database");

// GET /api/calculator/history
function getHistory(req, res) {
  try {
    const db = getDb();
    const result = db.exec(
      "SELECT * FROM profit_calculations WHERE user_id = ? ORDER BY created_at DESC LIMIT 50",
      [req.user.id]
    );

    if (!result.length) return res.json({ calculations: [] });

    const cols = result[0].columns;
    const calculations = result[0].values.map(row => {
      const obj = {};
      cols.forEach((col, i) => obj[col] = row[i]);
      return obj;
    });

    res.json({ calculations });
  } catch (err) {
    res.status(500).json({ error: "Eroare server." });
  }
}

// POST /api/calculator/save
function saveCalculation(req, res) {
  try {
    const { title, investment, revenue, profit, margin, notes } = req.body;
    const db = getDb();

    if (investment === undefined || revenue === undefined) {
      return res.status(400).json({ error: "Investment și revenue sunt necesare." });
    }

    const calcProfit = profit !== undefined ? profit : revenue - investment;
    const calcMargin = margin !== undefined ? margin : (revenue > 0 ? ((calcProfit / revenue) * 100) : 0);

    db.run(
      `INSERT INTO profit_calculations (user_id, title, investment, revenue, profit, margin, notes)
       VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [req.user.id, title || "Calcul", investment, revenue, calcProfit, calcMargin, notes]
    );
    saveDatabase();

    const result = db.exec("SELECT last_insert_rowid()");
    res.status(201).json({
      message: "Calcul salvat.",
      calculation: {
        id: result[0].values[0][0],
        title: title || "Calcul",
        investment, revenue,
        profit: calcProfit,
        margin: calcMargin,
      },
    });
  } catch (err) {
    res.status(500).json({ error: "Eroare la salvare." });
  }
}

// DELETE /api/calculator/:id
function deleteCalculation(req, res) {
  try {
    const db = getDb();
    db.run("DELETE FROM profit_calculations WHERE id = ? AND user_id = ?", [req.params.id, req.user.id]);
    saveDatabase();
    res.json({ message: "Calcul șters." });
  } catch (err) {
    res.status(500).json({ error: "Eroare la ștergere." });
  }
}

module.exports = { getHistory, saveCalculation, deleteCalculation };

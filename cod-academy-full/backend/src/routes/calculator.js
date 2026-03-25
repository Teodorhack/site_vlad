const express = require("express");
const router = express.Router();
const { getHistory, saveCalculation, deleteCalculation } = require("../controllers/calculatorController");
const { authenticate } = require("../middleware/auth");

router.get("/history", authenticate, getHistory);
router.post("/save", authenticate, saveCalculation);
router.delete("/:id", authenticate, deleteCalculation);

module.exports = router;

const express = require("express");
const router = express.Router();
const { getUserProgress, getModuleProgress, updateProgress, resetProgress } = require("../controllers/progressController");
const { authenticate } = require("../middleware/auth");

router.get("/", authenticate, getUserProgress);
router.get("/module/:moduleId", authenticate, getModuleProgress);
router.post("/update", authenticate, updateProgress);
router.post("/reset", authenticate, resetProgress);

module.exports = router;

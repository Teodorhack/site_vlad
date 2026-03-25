const express = require("express");
const router = express.Router();
const { getModules, getModule, getLesson, createModule, createLesson } = require("../controllers/modulesController");
const { authenticate, authorize, optionalAuth } = require("../middleware/auth");

router.get("/modules", optionalAuth, getModules);
router.get("/modules/:id", optionalAuth, getModule);
router.get("/lessons/:slug", optionalAuth, getLesson);
router.post("/modules", authenticate, authorize("admin"), createModule);
router.post("/lessons", authenticate, authorize("admin"), createLesson);

module.exports = router;

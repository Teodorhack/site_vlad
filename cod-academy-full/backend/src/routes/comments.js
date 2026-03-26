const express = require("express");
const router = express.Router();
const { createComment, getComments, deleteComment } = require("../controllers/commentsController");
const { authenticate } = require("../middleware/auth");

router.post("/", authenticate, createComment);
router.get("/:lessonId", authenticate, getComments);
router.delete("/:id", authenticate, deleteComment);

module.exports = router;

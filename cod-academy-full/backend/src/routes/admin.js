const express = require("express");
const router = express.Router();
const { getUsers, updateUserRole, toggleUser, getStats, resetUserPassword } = require("../controllers/adminController");
const { authenticate, authorize } = require("../middleware/auth");

router.use(authenticate, authorize("admin"));

router.get("/users", getUsers);
router.put("/users/:id/role", updateUserRole);
router.put("/users/:id/toggle", toggleUser);
router.put("/users/:id/reset-password", resetUserPassword);
router.get("/stats", getStats);

module.exports = router;

const express = require("express");
const router = express.Router();
const { register, login, refresh, logout, getMe, updateProfile, forgotPassword, resetPassword } = require("../controllers/authController");
const { authenticate } = require("../middleware/auth");
const { registerRules, loginRules } = require("../middleware/validation");

router.post("/register", registerRules, register);
router.post("/login", loginRules, login);
router.post("/refresh", refresh);
router.post("/logout", logout);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password", resetPassword);
router.get("/me", authenticate, getMe);
router.put("/profile", authenticate, updateProfile);

module.exports = router;

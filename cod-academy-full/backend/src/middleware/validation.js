const { body, validationResult } = require("express-validator");

const handleValidation = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      error: "Date invalide.",
      details: errors.array().map(e => ({ field: e.path, message: e.msg })),
    });
  }
  next();
};

const registerRules = [
  body("username")
    .trim().isLength({ min: 3, max: 30 }).withMessage("Username: 3-30 caractere.")
    .matches(/^[a-zA-Z0-9_]+$/).withMessage("Username: doar litere, cifre, underscore."),
  body("email").isEmail().normalizeEmail().withMessage("Email invalid."),
  body("password")
    .isLength({ min: 6 }).withMessage("Parola: minim 6 caractere.")
    .matches(/\d/).withMessage("Parola: cel puțin o cifră."),
  body("display_name").optional().trim().isLength({ max: 50 }),
  handleValidation,
];

const loginRules = [
  body("login").trim().notEmpty().withMessage("Username sau email necesar."),
  body("password").notEmpty().withMessage("Parola necesară."),
  handleValidation,
];

module.exports = { registerRules, loginRules, handleValidation };

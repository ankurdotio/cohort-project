// api kon-kon se hain,
const {
  registerController,
  loginController,
} = require("../controllers/auth.controller");

const express = require("express");

const router = express.Router();

router.post("/register", registerController);
router.post("/login", loginController);

module.exports = router;

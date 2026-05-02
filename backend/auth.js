const express = require("express");
const router = express.Router();

// simple test route
router.get("/", (req, res) => {
  res.json({ message: "Auth route working ✅" });
});

// register (dummy)
router.post("/register", (req, res) => {
  res.json({ message: "User registered", data: req.body });
});

// login (dummy)
router.post("/login", (req, res) => {
  res.json({ message: "User logged in", data: req.body });
});

module.exports = router;
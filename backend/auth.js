const express = require("express");
const router = express.Router();

// test route
router.get("/", (req, res) => {
  res.json({ message: "Auth working ✅" });
});

module.exports = router;
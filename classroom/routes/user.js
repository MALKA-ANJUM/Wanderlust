const express = require("express");
const router = express.Router();

// users - INDEX
router.get("/", (req, res) => {
  res.send("Get for users");
});

// users/:id - SHOW
router.get("/:id", (req, res) => {
  res.send("get for show usersid");
});

// users-POST
router.post("/", (req, res) => {
  res.send("POST for users");
});

// users-DELETE
router.delete("/:id", (req, res) => {
  res.send("Delete userid");
});

module.exports = router;

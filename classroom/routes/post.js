const express = require("express");
const router = express.Router();

// INDEX
router.get("/", (req, res) => {
  res.send("Get for posts");
});
//SHOW
router.get("/:id", (req, res) => {
  res.send("get for show postid");
});
//POST
router.post("/", (req, res) => {
  res.send("POST for post");
});
// DELETE
router.delete("/:id", (req, res) => {
  res.send("Delete userid");
});

module.exports = router;

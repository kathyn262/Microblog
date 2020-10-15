const express = require("express");
const router = new express.Router();

router.get("/", async function (req, res, next) {
  try {
    return res.json('backend pinged!');
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
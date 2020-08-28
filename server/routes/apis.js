const express = require("express");
const router = express.Router();

router.get("/user", (req, res) => {
    res.json({ user: req.body.user });
});

module.exports = router;

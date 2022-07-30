const router = require("express").Router();
const User = require("../models/User");

// UPDATE
router.put("/:id", async (req, res) => {
  if (req.body.userId === req.params.id) {
    try {
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(401).json({ message: "You van update just your account" });
  }
});

// DELETE
module.exports = router;

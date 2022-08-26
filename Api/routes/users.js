const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");


// UPDATE
router.put("/:id", async (req, res) => {
  if (req.body.userId === req.params.id) {
    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hash(req.body.password, salt);
    }
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedUser);
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(401).json({ message: "You can update just your account" });
  }
});

// DELETE
router.delete("/:id", async (req, res) => {
  // if (req.body.userId === req.params.id) {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "User deleted Succesfully.." });
    //  you can still see this users posts 43:00
  } catch (error) {
    res.status(500).json(error);
  }
  // } else {
  //   res.status(401).json({ message: "You can delete just your account" });
  // }
});

// GET USER
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (error) {
    res.status(500).json({ message: "error" });
  }
});

// GET ALL USERS

router.get("/",async (req, res) => {
  try {
    const allUsers = await User.find();
    res.status(200).json(allUsers);
  } catch (error) {
    res.status(500).json(error);
  }
});
module.exports = router;

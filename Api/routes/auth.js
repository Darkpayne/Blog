const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
require('dotenv').config();

const JWT_SECRET = "jhsdljb485t798vh8^#)79(*$*904ihnt8y89409u2jngn9030";
// REGISTER
router.post("/register", async (req, res) => {
  const user = await User.findOne({ username: req.body.username });
  const isTrue = Boolean(user);
  if(isTrue){
    res.status(400).json({ message: "username already exist! " }); 
  }else{
    try {
      const salt = await bcrypt.genSalt(10);
      const hashedPass = await bcrypt.hash(req.body.password, salt);
      
      const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: hashedPass,
      });
      
      const user = await newUser.save();
      
      res.status(200).json({ user, message: "user created Successful" });
      
    } catch (error) {
      res.status(400).json(error);
      
    }
    }
});

// LOGIN

router.post("/login", async (req, res) => {
  
  try {
    const user = await User.findOne({ username: req.body.username });
    if(!user){
      res.status(400).json({ message: "user don't exist " });
    }else{
      const validated = await bcrypt.compare(req.body.password, user.password);
      if(!validated){
        res.status(400).json({ message: "wrong password" });
      }else{
        const accessToken = jwt.sign(
          { username: user.username},
           process.env.ACCESS_TOKEN_SECRET,
           {expiresIn: '30s'}
          );
        const refreshToken = jwt.sign(
          { username: user.username},
           process.env.REFRESH_TOKEN_SECRET,
           {expiresIn: '1d'}
          );
          
        const { password, ...others } = user._doc;
        res.status(200).json(others);
        // res.status(200).json({accessToken});
        
        console.log(others);
      }
  

    }
  } catch (error) {
    res.status(500).json({ message: "something is wrong" });
  }
});
module.exports = router;

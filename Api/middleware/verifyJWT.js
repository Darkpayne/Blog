const jwt = require("jsonwebtoken");
require("dotenv").config();

const verifyJWt = (req,res,next)=>{
    const authHeader = req.headers['authorization']
    if (!authHeader?.startsWith('Bearer ')) return res.sendStatus(401);
    console.log(authHeader); //Bearer token
    const token = authHeader.split(' ')[1];
    // const token = authHeader; 
    jwt.verify(
        token,
        process.env.ACCESS_TOKEN_SECRET,
        (err,decoded)=>{
            if (err) return res.status(403).json({ message:'You are not authorized!!'});
            req.user = decoded.UserInfo.username;
            req.roles = decoded.UserInfo.roles;
            next()
        }
    )

}

module.exports = verifyJWt;
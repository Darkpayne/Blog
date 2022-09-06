const router = require("express").Router();
const Comments = require("../models/Comments");
const verifyJWt = require('../middleware/verifyJWT')
const verifyRoles = require('../middleware/verifyRoles')


router.post('/',verifyJWt , verifyRoles(2001) , async(req,res)=>{
    const newComments = new Comments(req.body);
    try {
        const savedComments = await newComments.save();
        res.status(200).json(savedComments)    
    } catch (error) {
        res.status(500).json(error)
    }
})
router.get('/', async(req,res)=>{
    try {
        com = await Comments.find();
        res.status(200).json(com)    
    } catch (error) {
        res.status(500).json(error)
    }
})
router.delete('/:id', async(req,res)=>{
    try {
        const comment = await Comments.findById(req.params.id)
        // if (post.username === req.body.username){
            try {
               await comment.delete();
                res.status(200).json({message:"Comment deleteed Successfully"});
            } catch (error) {
                res.status(500).json(error)
            }
        // }else{
        //     res.status(401).json({message:"You can only delete your posts!!"})
        // }
    } catch (error) {
        res.status(500).json(error)
    }
})


module.exports = router;
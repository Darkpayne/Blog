const router = require("express").Router();
const Post = require("../models/Post");
const bcrypt = require('bcrypt');

// CREATE NEW POST
router.post("/", async (req, res) => {
    const newPost = new Post(req.body);
    try {
        const savedPost = await newPost.save();
        res.status(200).json(savedPost)    
    } catch (error) {
        res.status(500).json(error)
    }
});

// UPDATE
router.put("/:id", async (req, res) => {
    try {
         await Post.findById(req.params.id)

        // if (post.username === req.body.username){
            try {
                const updatedPost = await Post.findByIdAndUpdate(req.params.id, 
                {
                    $set : req.body
                }, 
                {
                    new:true
                })
                res.status(200).json({message:"post updated "});
            } catch (error) {
                console.log(error);
            }
        // }else{
        //     res.status(401).json({message:"You can only update your posts!!"})
        // }
    } catch (error) {
        res.status(500).json({message:"error in server"})
    }
});

// DELETE POST
router.delete("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)
        // if (post.username === req.body.username){
            try {
               await post.delete();
                res.status(200).json({message:"post deleteed Successfully"});
            } catch (error) {
                
            }
        // }else{
        //     res.status(401).json({message:"You can only delete your posts!!"})
        // }
    } catch (error) {
        res.status(500).json(error)
    }
});

// GET POST
router.get("/:id", async (req,res)=>{
    try {
        const post = await Post.findById(req.params.id);
  
        res.status(200).json(post);
    } catch (error){
        res.status(500).json(error)
    }
})

// GET ALL POST

router.get("/", async (req,res)=>{
    const username = req.query.user;
    const category = req.query.cat;

    try {
        let posts;
        if (username){
            posts = await Post.find({username})
        }else if(category){
            posts = await Post.find({categories:{
                $in:[category]
            }})
        }else{
            posts = await Post.find()
        }
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json(error);
    }
})

module.exports = router;

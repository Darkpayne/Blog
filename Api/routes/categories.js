const router = require("express").Router();
const Category = require("../models/Category");
const verifyJWt = require('../middleware/verifyJWT')


//ADD Category
router.post("/",verifyJWt, async (req,res)=>{
    const newCat = new Category(req.body);
    try {
        const savedCat = await newCat.save();
        res.status(200).json(savedCat);
    } catch (error) {
        res.status(500).json(error)
    }
})

// DELETE CATEGORY
router.delete("/:id",verifyJWt, async (req, res) => {
   
        const cat = await Category.findById(req.params.id)
       
        if (cat){
            try {
               await cat.delete();
                res.status(200).json({message:"category deleted Successfully"});
            } catch (error) {
                console.log(error);
            }
        }else{
            res.status(401).json({message:"You can only delete your posts!!"})
        }
   
});

//GET ALL Category
router.get("/", async (req,res)=>{
    try {
        const allCat = await Category.find();
        res.status(200).json(allCat)
    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = router;
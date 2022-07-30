const router = require("express").Router();
const Category = require("../models/Category");

//ADD POST
router.post("/", async (req,res)=>{
    const newCat = new Category(req.body);
    try {
        const savedCat = await newCat.save();
        res.status(200).json(savedCat);
    } catch (error) {
        res.status(500).json(error)
    }
})

//GET ALL POST
router.get("/", async (req,res)=>{
    try {
        const allCat = await Category.find();
        res.status(200).json(allCat)
    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = router;
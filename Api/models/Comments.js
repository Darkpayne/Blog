const mongoose = require('mongoose');

const CommentsSchema = mongoose.Schema({
    body:{
        type:String,
        required:true,
    },
    postId:{
        type:String,
        required:true,
    },
    userId:{
        type:String,
        required:true,
    },
    username:{
        type:String,
        required:true,
    },
   
},{timestamps:true})

module.exports = mongoose.model("Comments", CommentsSchema);
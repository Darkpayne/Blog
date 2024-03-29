const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique: true
    },
    desc:{
        type:String,
        required:true,
    },
    photo:{
        type:String,
        required:false,
    },
    username:{
        type:String,
        required:true,
    },
    status:{
        type:Boolean,
        default:true,
    },
    categories:{
        type:Array,
        required:false,
    }
},{timestamps:true})

module.exports = mongoose.model("Post", PostSchema);
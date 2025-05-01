const mongoose = require("mongoose")
const marshSChema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    salary:{
        type:Number,
        required:true
    },
    dept:{
        type:String,
        required:true 
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }
})

module.exports = mongoose.model("marsh",marshSChema)
const mongoose = require("mongoose")
const cricketSchema = new mongoose.Schema({
    cricName:{
        type:String,
        required:true
    },
    age:{
        type:String,
        required:true
    },
    Date:{
        type:Date,
        default:Date.now()
    }
})

module.exports = mongoose.model("cricket",cricketSchema)


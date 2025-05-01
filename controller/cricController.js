const Cricket = require("../model/cricket")

exports.getCricket = async (req,res)=>{
    try {
        const data = await Cricket.find()
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(500).json({errors:true,message:error.message})
    }
}


exports.postCricket = async (req,res)=>{
    try {
        const data = await Cricket.create(req.body)
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(500).json({errors:true,message:error.message})
    }
}


exports.putCricket = async (req,res)=>{
    try {
        const data = await Cricket.findByIdAndUpdate(req.params.id,req.body,{new:true})
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(500).json({errors:true,message:error.message})
    }
}


exports.deleteCricket = async (req,res)=>{
    try {
        const data = await Cricket.findByIdAndUpdate(req.params.id)
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(500).json({errors:true,message:error.message})
    }
}



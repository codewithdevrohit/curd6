const Cooker = require("../model/cooker")


exports.getCooker = async (req,res)=>{
    try {
        const data = await Cooker.find()
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(500).json({errors:true,message:error.message})
    }
}

exports.postCooker = async (req,res)=>{
    try {
        const data = await Cooker.create(req.body)
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(500).json({errors:true,message:error.message})
    }
}

exports.putCooker = async (req,res)=>{
    try {
        const data = await Cooker.findByIdAndUpdate(req.params.id,req.body,{new:true})
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(500).json({errors:true,message:error.message})
    }
}

exports.deleteCooker = async (req,res)=>{
    try {
        const data = await Cooker.findByIdAndDelete(req.params.id)
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(500).json({errors:true,message:error.message})
    }
}
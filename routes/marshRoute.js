const{getMarsh,postMarsh,putMarsh,deleteMarsh} = require("../controller/marshController")
const route = require("express").Router()

route.get("/",getMarsh)
route.post("/",postMarsh)
route.put("/:id",putMarsh)
route.delete("/:id",deleteMarsh)


module.exports = route
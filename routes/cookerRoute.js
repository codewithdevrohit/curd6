const{getCooker,postCooker,putCooker,deleteCooker} = require("../controller/cookerController")
const route = require("express").Router()

route.get("/",getCooker)
route.post("/",postCooker)
route.put("/:id",putCooker)
route.delete("/:id",deleteCooker)

module.exports = route
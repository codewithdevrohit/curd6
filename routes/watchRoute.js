const{getWatch,postWatch,putWatch,deleteWatch} = require("../controller/watchController")
const route = require("express").Router()

route.get("/",getWatch)
route.post("/",postWatch)
route.put("/:id",putWatch)
route.delete("/:id",deleteWatch)

module.exports = route
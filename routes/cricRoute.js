const{getCricket,postCricket,putCricket,deleteCricket} = require("../controller/cricController")
const route = require("express").Router()

route.get("/",getCricket)
route.post("/",postCricket)
route.put("/:id",putCricket)
route.delete("/:id",deleteCricket)

module.exports = route
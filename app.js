const mongoose = require("mongoose")
const express = require("express")
const app = express()
require("dotenv/config")
const productRoute = require("./routes/productRoutes")
const cricRoute = require("./routes/cricRoute")
const marshRoute = require("./routes/marshRoute")
const cookerRoute = require("./routes/cookerRoute")
const watchRoute = require("./routes/watchRoute")







app.use(express.json())

app.get("/",(req,res)=>{
   res.send("home")  
})

app.use("/api/product",productRoute)
app.use("/api/cricket",cricRoute)
app.use("/api/marsh",marshRoute)
app.use("/api/cooker",cookerRoute)
app.use("/api/watch",watchRoute)







app.listen(process.env.PORT)

async function db() {
    try {
        const con = await mongoose.connect(process.env.DB)
        console.log(con.default.STATES.connected);
    } catch (error) {
       console.log(error.message); 
    }
}

db()
    
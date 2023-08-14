require("dotenv").config()
const express = require("express");
const helmet = require("helmet");
const cors = require("cors")
const morgan = require("morgan")
const router = require("./routes/resturantRoutes")


const app = express()
const PORT = process.env.PORT || 3002;

app.use(morgan("dev"))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(helmet())
app.use(cors())
app.use("/api/v1/restaurants", router)


app.listen(PORT, ()=>{
    console.log(`server running on port ${PORT}`)
})
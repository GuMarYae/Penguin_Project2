
// app object
const app = express()
// import deps
const express = require("express")
//==import mongoose
const mongoose = require("mongoose")
//==use .env
require("dotenv").config()



// route
app.get("/", (req, res) => {
    res.send("This App is working")
})

// listener
const PORT = process.env.PORT || 3000
app.listen(PORT, console.log(`listening on port ${PORT}`))
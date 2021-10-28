//==use .env
require("dotenv").config()
//==import mongoose
const mongoose = require("mongoose")
//(above, was in server.js )



const DATABASE_URL = process.env.DATABASE_URL // url from .env
const CONFIG = {
    //these two lines all warnings.. you know all those anoying words in the log during homework
    useNewUrlParser: true,
    useUnifiedTopology: true
}

// Connect to Mongo
mongoose.connect(DATABASE_URL, CONFIG)

//save the connection in a variable...our connection messages
const db = mongoose.connection;

//create notifications - when the connection opens, we're notified, when it closes, we're notified
db.on("open", () => console.log("Gu, you're good. You're connected to mongo 🔥🙏🏾🔥🙏🏾🔥🙏🏾🔥🙏🏾"));
db.on("close", () => console.log("Gu, you're not connected to mongo, bruh 😖"));
db.on("error", (error) => console.log(error));



//export the connection. All he wanted to export is mongoose
module.exports = mongoose 

//1) this was #1 now Ill make the schema
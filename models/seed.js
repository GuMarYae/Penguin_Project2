//were exporting mongoose again but from the connection 
//because the connection alredy has mongoose already declared
//its the first FREAKIN' LIIINE, well, after dotenv!!!  Duh
const mongoose = require("./connection")

//importing the Wishlists from Wishlists.js
const Wishlists = require("./wishlists")

//save the connection in a variable
const db = mongoose.connection

//run the seed code when the connection opens 
db.on("open", () => {

 // delete all wishlists
 Wishlists.deleteMany({})
   .then(() => {

    // array of starter wishlists
    const seedData = [
        { name: "Xbox Series X", cost: 500, purchased: false },
        { name: "Gucci Envy", cost: 80, purchased: false },
        { name: "Comforter", cost: 200, purchased: false },
        { name: "Hat", cost: 11, purchased: false },
        { name: "Diamond Earrings", cost: 3000, purchased: false },
      ];

   

        // seed the starter Wishlists
        Wishlists.create(seedData)
        .then((data) => {
            console.log(data)
           db.close()
        })
    })
})


//3)check     lets goooo..   off to making the server
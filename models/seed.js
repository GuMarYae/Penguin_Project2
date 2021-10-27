//were exporting mongoose again but from the connection 
//because the connection alredy has mongoose already declared
//its the first FREAKIN' LIIINE, well, after dotenv!!!  Duh
const mongoose = require("./connection")

//importing the Wishlists from Wishlists.js
const Wishlists = require("./Wishlists")

//save the connection in a variable
const db = mongoose.connection

//run the seed code when the connection opens 
db.on("open", () => {
    // array of starter wishlists
    const startWishlist = [
        { name: "Xbox Series X", price: 500, purchased: false },
        { name: "Gucci Envy", price: 80, purchased: false },
        { name: "Comforter", price: 200, purchased: false },
        { name: "Whataburger (yes, whatburger) Burger", price: 11, purchased: false },
        { name: "Diamond Earrings", price: 3000, purchased: false },
      ];

    // delete all wishlists
    Wishlists.deleteMany({}).then((data) => {
        // seed the starter Wishlists
        Wishlists.create(startWishlist).then((data) => {
            console.log(data)
            db.close()
        })
    })
})

//this took mongoose from connections (module.exports = mongoose )
//⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️
const {Schema, model} = require("mongoose")

//creating the Schema

const WishlistsSchema = new Schema ({
    name: String,
    cost: Number,
    purchased: Boolean,
}, {timestamps:true})

//creating the model
const Wishlists = model("Wishlists", WishlistsSchema)

//exporting the model
module.exports = Wishlists

//2) from here, we set up the seed file
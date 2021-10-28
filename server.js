////////////////////////////////////////////////////////
//dependencies
////////////////////////////////////////////////////////

//enable .env
require("dotenv").config()

//setup express variable
const express = require("express")
//setup morgan variable
const morgan = require("morgan") // logger
//setup method override variable
const methodOverride = require("method-override") // to swap request methods

//========4 made a router from the controllers(wishlist) folder
const wishlistsRouter =  require("./controllers/wishlists")


////////////////////////////////////////////////////////
// import liquid .. yes,, alll this is for liquid
////////////////////////////////////////////////////////
const app = require("liquid-express-views")(express())

//request Methods

// const path = require("path") // helper functions for file paths
// const liquid = require("liquid-express-views")
// const { doesNotMatch } = require("assert")

// construct an absolute path to our views folder
// const viewsFolder = path.resolve(__dirname, "views/")

// log to see the value of viewsFolder
// console.log(viewsFolder)

// create an app object with liquid, passing the path to the views folder
//   try//  const app = liquid(express(), {root: viewsFolder})



////////////////////////////////////////////////////////
//middleware setups  
 ////////////////////////////////////////////////////////


//morgan is the extension that logs back to 
//VScode after activity in the browser
//morgan is 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
app.use(morgan("tiny"))
// ability to override request methods
app.use(methodOverride("_method"))
// ability to parse urlencoded from for submission
app.use(express.urlencoded({extended: true}))
// setup our public folder to serve files statically 
//Static is 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
app.use(express.static("public"))


////////////////////////////////////////
// Routes
/////////////////////////////////////////

app.get("/", (req, res) => {
    res.send("hellooo")
})



//========4 made a router from the controllers(wishlist) folder

//any url that starts with slash /wishlists has to go through that 
//router which then goes to the controller where all the router commands are
app.use("/wishlists", wishlistsRouter)




/////////////////////////////////////////
// listener
/////////////////////////////////////////
const PORT = process.env.PORT || 3000
app.listen(PORT, console.log(`listening on port ${PORT}`))







//4) now we make a wishlists in controllers
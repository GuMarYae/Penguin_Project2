const express = require("express");
//importing the wishlists that was exported from the models folder...  the module.exports = Wishlists
const Wishlists = require("../models/wishlists");

////////////////////////////////////////////////////////
// routers
////////////////////////////////////////////////////////
const router = express.Router();

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// routes   |indes, shoow, new, edit, create, update, and freakin DELETE
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////
// index  (json)
////////////////////////////////////////////////////////
//===this is to see the data in JSON. we dont need this anymore

// router.get("/", (req, res) => {
//   Wishlists.find({})
//   .then((wishlists) => {
//     // console.log
//     res.json(wishlists);
//   });
// });

// index index
router.get("/", (req, res) => {
  Wishlists.find({}).then((wishlists) => {
    res.render("wishlists/index.liquid", { wishlists });
  });
});

////////////////////////////////////////////////////////
// index  (json)
////////////////////////////////////////////////////////

// new route - get request - /wishlists/new
router.get("/new", (req, res) => {
    res.render("wishlists/new.liquid")
})


// create - post request - /wishlists
router.post("/", (req, res) => {

  // // convert the checkbox property to true or false
  // req.body.readyToEat = req.body.readyToEat === "on" ? true : false

  // create the new wishlists
  Wishlists.create(req.body)
  .then((Wishlist) => {
      // redirect the user back to the index route
      res.redirect("/wishlists")
  })
  // error handling
  .catch((error) => {
      res.json({error})
  })

})











////////////////////////////////////////////////////////
// show
////////////////////////////////////////////////////////
//get - /wishlists/:id
router.get("/:id", (req, res) => {
    // get the id from params
    const id = req.params.id

    // get that particular wishlist item from the database
    Wishlists.findById(id)
    .then((wishlist) => {
        // render the show template with the wishlists
        res.render("wishlists/show.liquid", {wishlist})
    })

})



module.exports = router;

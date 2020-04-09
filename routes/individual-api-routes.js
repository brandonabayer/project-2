// Dependencies
// =============================================================

// Requiring our Todo model
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {
    // POST route for saving a new individual
  app.post("/api/individuals", function(req, res) {
    // Create a new individual and save it to the database
    db.Individual.create(
      {
        fname: req.body.fname,
        lname: req.body.lname,
        state: req.body.state
      }
    )
    .then(function(data) {
      // Use res.json to return the new individual to the client
      res.json(data);
    });
  });

  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", function(req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });
  
};
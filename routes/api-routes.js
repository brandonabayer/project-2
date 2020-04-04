var db = require("../models");
var passport = require("../config/passport");
var unirest = require("unirest");

module.exports = function(app) {

  // ====== Routes for login ======

  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/api/login", passport.authenticate("local"), function(req, res) {
    res.json(req.user);
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", function(req, res) {
    db.User.create({
      email: req.body.email,
      password: req.body.password
    })
      .then(function() {
        res.redirect(307, "/api/login");
      })
      .catch(function(err) {
        res.status(401).json(err);
      });
  });

  // Route for logging user out
  app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });

  // ====== Other routes ====== 

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

  // GET route for getting all of the closetohome
  app.get("/api/closetohome", function(req, res) {
    db.family.findAll({}).then(response=>{
      res.json(response)
    })
  });

  // POST route for saving a new closetohome. We can create todo with the data in req.body
  app.post("/api/closetohome", function(req, res) {
    var newFamily=req.body
    db.family.create(newFamily).then(response=>{
      res.json(response)
    })
  });
  
  // DELETE route for deleting closetohome. We can get the id of the todo to be deleted from
  // req.params.id
  app.delete("/api/closetohome/:id", function(req, res) {
    db.family.destroy({
      where:{
        id:  req.params.id
      }
    }).then(response=>{
      res.json(response)
    })
  });
  
  // PUT route for updating closetohome. We can get the updated todo data from req.body
  app.put("/api/closetohome/:id", function(req, res) {
      var newFamily = req.body.text
    db.family.update({
      text: newToDo
    },{
      where:{
        id: req.body.id
      }
    }).then(response=>{
      res.json(response)
    })

  });

  // Route for getting information about a given individual
  // For now, just looks up the number of cases for the user's state and returns that
  app.get("/api/user_data_covid/:id", function(req, res) {

    // As a start, for a given user ID, retrieve the state from individuals
    // Then, look up the number of cases for that state from the Coronavirus monitor API

    db.Individual.findOne({
      where: {
        id: req.params.id
      }
    }).then(response => {
      // Get the state from the user
      const currentState = response.state;

      // For the given state, look up the number of cases from the Coronavirus Monitor API
      var req = unirest("GET", "https://coronavirus-monitor.p.rapidapi.com/coronavirus/johns_hopkins_latest_usa_statistic_by_state.php");

      // Specify the state for the request
      req.query({
        "state":currentState
      });

      req.headers({
        "x-rapidapi-host":"coronavirus-monitor.p.rapidapi.com",
        "x-rapidapi-key":process.env.CORONAVIRUS_MONITOR_API_KEY
      });
        
      req.end(function(coronavirusAPIRes) {
        if (res.error) throw new Error(res.error);
  
        // Having retrieved the results for the given state, find just the number of cases

        // Parse the JSON string from the Coronavirus API into an object
        var resultObject = JSON.parse(coronavirusAPIRes.body);
    
        // Results are formatted as follows
        // - State: string
        // - usa_deaths: array of objects
        // - usa_cases_by_state: array of objects

        // Within usa_cases_by_state, find the object where the state name matches the current individual's state
        var currentStateResults = resultObject.usa_cases_by_state.filter(state => state.state_name === currentState);
    
        // Entries in usa_cases_by_state are formatted as follows
        // - state_name
        // - cases_number
        // - date

        // From currentStateResults, get the number of cases and send it back to the client
        res.json(currentStateResults[0].cases_number);
      });
    });
  });
};

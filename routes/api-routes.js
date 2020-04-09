var db = require("../models")
var unirest = require("unirest");

module.exports = function(app) {

    // GET route for getting all of the closetohome -- tested
    app.get("/api/closetohome", function(req, res) {

      db.Family.findAll({}).then(response=>{

        res.json(response)
      })
    });
  
    // POST route for saving a new closetohome. We can create closehome with the data in req.body -- tested
    app.post("/api/closetohome", function(req, res) {
      var newFamily=req.body;

      db.Family.create(newFamily).then(response=>{

        res.json(response)
      })
    });
  
    // DELETE route for deleting closetohome. We can get the id of the closetohome to be deleted from -- tested
    // req.params.id
    app.delete("/api/closetohome/:id", function(req, res) {

      db.Family.destroy({

        where:{
          id:  req.params.id
        }
      }).then(response=>{
        res.json(response);
      })
    });
  
    // PUT route for updating closetohome. We can get the updated todo data from req.body -- tested
    app.put("/api/closetohome/:id", function(req, res) {

       var newFamily = req.body
       console.log(newFamily)
       var id = req.params.id
      db.Family.update(newFamily,{

        where:{
          id: parseInt(id)
        }
      }).then(response=>{
        res.json(response)
      })
  
    });

        // GET route for getting all of the closetohome -- tested
        app.get("/api/individual", function(req, res) {
            db.Individual.findAll({}).then(response=>{
              res.json(response)
            })
          });
        
          // POST route for saving a new closetohome. We can create todo with the data in req.body -- tested
          app.post("/api/individual", function(req, res) {
            var newIndividual=req.body
            db.Individual.create(newIndividual).then(response=>{
              res.json(response)
            })
          });
        
          // DELETE route for deleting closetohome. We can get the id of the todo to be deleted from
          // req.params.id -- tested
          app.delete("/api/individual/:id", function(req, res) {
            db.Individual.destroy({
              where:{
                id:  req.params.id
              }
            }).then(response=>{
              res.json(response)
            })
          });
        
          // PUT route for updating closetohome. We can get the updated todo data from req.body -- tested
          app.put("/api/individual/:id", function(req, res) {
             var newIndividual = req.body
            db.Individual.update(newIndividual,{
              where:{
                id: req.params.id
              }
            }).then(response=>{
              res.json(response)
            })
        
          });
              // GET route for getting all of the closetohome 
    app.get("/api/closetohome", function(req, res) {
        db.Need.findAll({}).then(response=>{
          res.json(response)
        })
      });
    
      // POST route for saving a new closetohome. We can create todo with the data in req.body
      app.post("/api/needs", function(req, res) {
        var newNeed=req.body
        db.Need.create(newNeed).then(response=>{
          res.json(response)
        })
      });
    
      // DELETE route for deleting closetohome. We can get the id of the todo to be deleted from
      // req.params.id
      app.delete("/api/closetohome/:id", function(req, res) {
        db.Need.destroy({
          where:{
            id:  req.params.id
          }
        }).then(response=>{
          res.json(response)
        })
      });
    
      // PUT route for updating closetohome. We can get the updated todo data from req.body
      app.put("/api/sympton/:id", function(req, res) {
        var newNeed = req.body
        db.Need.update(newNeed,{
          where:{
            id: req.params.id
          }
        }).then(response=>{
          res.json(response)
        })
    
      });
          // GET route for getting all of the closetohome
  app.get("/api/sympton", function(req, res) {
    db.Sympton.findAll({}).then(response=>{
      res.json(response)
    })
  });
    
  // POST route for saving a new closetohome. We can create todo with the data in req.body
  app.post("/api/sympton", function(req, res) {
    var newSympton=req.body
    db.Sympton.create(newSympton).then(response=>{
      res.json(response)
    })
  });
    
  // DELETE route for deleting closetohome. We can get the id of the todo to be deleted from
  // req.params.id
  app.delete("/api/sympton/:id", function(req, res) {
    db.Sympton.destroy({
      where:{
        id:  req.params.id
      }
    }).then(response=>{
      res.json(response)
    })
  });

  // PUT route for updating closetohome. We can get the updated todo data from req.body
  app.put("/api/closetohome/:id", function(req, res) {
    var newSympton = req.body
    db.Sympton.update(newSympton,{
      where:{
        id: req.params.id
      }
    }).then(response=>{
      res.json(response)
    })
  });

  // Route for getting information about a given individual
  // For now, just looks up the number of cases for the user's state and returns that
  app.get("/api/user_data/:id", function(req, res) {

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


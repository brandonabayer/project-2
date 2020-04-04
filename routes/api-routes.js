var db = require("../models")
module.exports = function(app) {

    // GET route for getting all of the closetohome -- tested
    app.get("/api/closetohome", function(req, res) {
      db.Family.findAll({}).then(response=>{
        res.json(response)
      })
    });
  
    // POST route for saving a new closetohome. We can create closehome with the data in req.body -- tested
    app.post("/api/closetohome", function(req, res) {
      var newFamily=req.body
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
        res.json(response)
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
  };
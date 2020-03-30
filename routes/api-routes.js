var db = require("../models")
module.exports = function(app) {

    // GET route for getting all of the closetohome
    app.get("/api/closetohome", function(req, res) {
      db.Todo.findAll({}).then(response=>{
        res.json(response)
      })
    });
  
    // POST route for saving a new closetohome. We can create todo with the data in req.body
    app.post("/api/closetohome", function(req, res) {
      var newToDo=req.body
      db.Todo.create(newToDo).then(response=>{
        res.json(response)
      })
    });
  
    // DELETE route for deleting closetohome. We can get the id of the todo to be deleted from
    // req.params.id
    app.delete("/api/closetohome/:id", function(req, res) {
      db.Todo.destroy({
        where:{
          id:  req.params.id
        }
      }).then(response=>{
        res.json(response)
      })
    });
  
    // PUT route for updating closetohome. We can get the updated todo data from req.body
    app.put("/api/closetohome/:id", function(req, res) {
       var newToDo = req.body.text
      db.Todo.update({
        text: newToDo
      },{
        where:{
          id: req.body.id
        }
      }).then(response=>{
        res.json(response)
      })
  
    });
  };
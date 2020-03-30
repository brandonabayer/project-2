var path = require("path")

function htmlroutes(app){
    app.get("/",function(req,res){
        res.sendFile(path.join(__dirname,"../public/index.html")) 
    })
    app.get("/information",function(req,res){
        console.log("hello")
        res.sendFile(path.join(__dirname,"../public/input.html"))
    })
}

module.exports = htmlroutes
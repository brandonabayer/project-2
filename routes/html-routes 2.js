var path = require("path")

function htmlroutes(app){
    app.get("/login",function(req,res){
        res.sendFile(path.join(__dirname,"../public/login.html")) 
    })
    app.get("/signup",function(req,res){
        res.sendFile(path.join(__dirname,"../public/signup.html")) 
    })
    app.get("/",function(req,res){
        res.sendFile(path.join(__dirname,"../public/index.html")) 
    })
    app.get("/information",function(req,res){
        console.log("hello")
        res.sendFile(path.join(__dirname,"../public/family.html"))
    })
    app.get("/needs",function(req,res){
        console.log("hello")
        res.sendFile(path.join(__dirname,"../public/needs.html"))
    })
    app.get("/symptons",function(req,res){
        console.log("hello")
        res.sendFile(path.join(__dirname,"../public/symptons.html"))
    })
}

module.exports = htmlroutes
const express = require("express");

const server = express();

const Routes = require("./Routes")

server.use((req,res,next)=>{
    console.log("Application level middleware which will apply to all Application");
    next();
})

server.use(Routes);

const port = 8000;
server.listen(port ,()=>{
    try{
        console.log("Sever is live on port 8000");
    }
    catch(err){
        console.log("error found "+err);
    }
})
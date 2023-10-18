const Routes = require("express").Router();

Routes.use("/api/main",(req,res,next)=>{
    console.log("Applying middleware specific route");
    next()
})


const {HomeController,BollywoodController,HollywoodController,FitnessController,TechnologyController} = require("./Controller/category")

Routes.get("/",HomeController)

Routes.get("/bollywood",BollywoodController)

Routes.get("/api/main/hollywood",HollywoodController)

Routes.get("/fitness",FitnessController)

Routes.get("/api/main/technology",TechnologyController)


module.exports = Routes

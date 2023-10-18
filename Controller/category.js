const HomeController = (req,res)=>{
    return res.send("Home Page")
}

const BollywoodController = (req,res)=>{
    return res.send(" Bollywood Page")
}

const HollywoodController = (req,res)=>{
    return res.send(" Hollywood Page")
}

const FitnessController = (req,res)=>{
    return res.send(" Fitness Page")
}

const TechnologyController = (req,res)=>{
    return res.send(" Technology Page")
}

module.exports = {HomeController,BollywoodController,HollywoodController,FitnessController,TechnologyController}
const Joke = require("../models/jokes.model");


// C
module.exports.createJoke = (req, res) =>{
    Joke.create(req.body)
        .then(newJoke => {
            res.json(newJoke)
        })
        .catch((err) => {
            //console.log("Logging error: ", err)
            res.json({message: "Something went wrong during create", err : err})
        })
}

// R
module.exports.readOneJoke = (req, res) =>{
    Joke.find({_id : req.params._id})
        .then(oneJoke => {
            res.json(oneJoke)
        })
        .catch((err) => {
            //console.log("Logging error: ", err)
            res.json({message: "Something went wrong during readOne", err : err})
        })
}

// R All
module.exports.readAllJokes = (req, res) =>{
    Joke.find()
        .then(allJokes => {
            res.json(allJokes)
        })
        .catch((err) => {
            //console.log("Logging error: ", err)
            res.json({message: "Something went wrong during readAll", err : err})
        })
}

// R random
module.exports.readRandomJoke = (req, res) =>{
    Joke.find()
        .then(allJokes => {
            let randomID = (Math.floor(Math.random()*allJokes.length))
            res.json(allJokes[randomID])
        })
        .catch((err) => {
            //console.log("Logging error: ", err)
            res.json({message: "Something went wrong during readRandom", err : err})
        })
}


// U
module.exports.updateJoke = (req, res) =>{
    Joke.findOneAndUpdate({_id : req.params._id}, req.body)
        .then(updatedJoke => {
            res.json(updatedJoke)
        })
        .catch((err) => {
            //console.log("Logging error: ", err)
            res.json({message: "Something went wrong during updateOne", err : err})
        })
}


// D
module.exports.deleteJoke = (req, res) =>{
    Joke.deleteOne({_id : req.params._id})
        .then(deletedJoke => {
            res.json(deletedJoke)
        })
        .catch((err) => {
            //console.log("Logging error: ", err)
            res.json({message: "Something went wrong during deleteOne", err : err})
        })
}


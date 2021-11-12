const JokeController = require("../controllers/jokes.controller");

module.exports = app =>{
    // create
    app.post("/api/jokes/new", JokeController.createJoke)
    //get random
    app.get("/api/jokes/random", JokeController.readRandomJoke)
    // get all
    app.get("/api/jokes", JokeController.readAllJokes)
    // get one
    app.get("/api/jokes/:_id", JokeController.readOneJoke)
    // update
    app.put("/api/jokes/update/:_id", JokeController.updateJoke)
    // delete
    app.delete("/api/jokes/delete/:_id", JokeController.deleteJoke)

}
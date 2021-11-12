const mongoose = require ("mongoose");

const JokeSchema = new mongoose.Schema({
    setup : {
        type : String,
        required : [true, "setup required"],
        minlength: [10, "must be at least 10 characters"]
    },
    punchline : {
        type : String,
        required : [true, "punchline required"],
        minlength: [3, "must be at least 3 characters"]
    }
}, {timestamps : true} )


const Joke = mongoose.model("Joke", JokeSchema);


module.exports = Joke;
const express = require("express");
const app = express();
const port = 8000;

require("./server/config/mongoose.config")

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

const AllRoutes = require ("./server/routes/jokes.routes")
AllRoutes(app);


const server = app.listen(port, () =>
    console.log(`listening on port ${server.address().port}!`)
);

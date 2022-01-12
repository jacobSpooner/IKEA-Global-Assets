const express = require("express");
const formidableMiddleware = require("express-formidable");
const path = require("path")
const mongoose = require("mongoose")
const config = require("./config/database");

// Connection to mongoDB
mongoose.connect(config.database, {
    useUnifiedTopology : true,
    useNewUrlParser: true
});
const db = mongoose.connection;

// Handle error events during connection
db.on("error", console.error.bind(console, "Connection Error!"));

// Open the connection
db.once("open", () => console.log("Connection Established!"));

/*Initialise express app*/
const app = express();

/*Use formidable middleware*/
app.use(formidableMiddleware());

//Set the public folder for middleware
app.use(express.static(path.join(__dirname, "public")));

//Set the headers of the response object in the middleware
app.use(function(req, res, next) {
    //Set the “Access-Control-Allow-Origin” for the Website you wish to allow to connect
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:8080");
    //Set the “Access-Control-Allow-Methods” for the Request methods you wish to allow
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");

    //Set the  "Access-Control-Allow-Headers“ for the Request headers you wish to allow
    res.setHeader("Access-Control-Allow-Headers", "content-type, X-Requested-With");

    //Set "Access-Control-Allow-Credentials“ to true if you need the website to include cookies in the requests sent to the API (e.g. in case you use sessions)
    res.setHeader("Access-Control-Allow-Credentials", true);

    //Pass to next layer of middleware
    next();

});

//Set the routes
const products = require("./routes/products");

//Load Middleware on app
app.use("/products", products);

// Start the server by listening to port 3000
const port = 3000;
app.listen(port, () => console.log("Listening on port: " + port))

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

//Create the public folder for static files

//Set the public folder for middleware
app.use(express.static(path.join(__dirname, "public")));

//Set the routes
const products = require("./routes/products");

//Load Middleware on app
app.use("/products", products);

// Start the server by listening to port 3000
const port = 3000;
app.listen(port, () => console.log("Listening on port: " + port))

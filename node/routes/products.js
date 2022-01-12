// All API calls are routed on this file for products collection

//Create a router module
const express = require("express");
const router = express.Router();

const Product = require('./../models/product');


router.get("/", (req, res) => {
    //Use find({}) query to retrieve the documents from the collection
    Product.find({}, (error, pages) => {
        if(error) console.log("Error in Pages " + error);
        res.json(pages); //Display the response in json
    });
});

//Export the router
module.exports = router;
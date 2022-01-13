// All API calls are routed on this file for products collection

//Create a router module
const express = require("express");
const router = express.Router();

const Product = require('./../models/product');

router.get("/", (req, res) => {
    //Use find({}) query to retrieve the documents from the collection
    Product.find({}, (error, products) => {
        if(error) console.log("Error in Pages " + error);
        res.json(products); //Display the response in json
    });
});

//Define the POST method on the router. 
router.post("/", (req, res) => {

    const productcode = req.fields.productcode;
    const name = req.fields.name;
    const price = req.fields.price;
    const quantity = req.fields.quantity;
    const image = req.fields.image;

    const product = new Product({
        productcode: productcode,
        name: name,
        price: price,
        quantity: quantity,
        image: image  
    });

    console.log(product + " POST Page ")

    product.save((error) => {
        if(error) console.log("Error in Products" + error)
            res.status(201).end();  
    });
});

router.put("/:id", (req, res) => {
    const id = req.params.id;
    const productcode = req.fields.productcode;
    const name = req.fields.name;
    const price = req.fields.price;
    const quantity = req.fields.quantity;
    const image = req.fields.image;

    Product.findById(id, (error, tempproduct) => {
        if(error) console.log("Error in Products " + error);
        tempproduct.productcode = productcode;
        tempproduct.name = name;
        tempproduct.price = price;
        tempproduct.quantity = quantity;
        tempproduct.image = image; 

            console.log(tempproduct);

            tempproduct.save((error) => {
                if(error) console.log("Error in Products " + error);
                res.status(201).end(); 
                console.log("Put updated data in db")
            });
        
    });

    
});

//Define the DELETE method on the router. 
router.delete("/:id", (req, res) => {
    const id = req.params.id;
    Product.findByIdAndRemove(id, (error) => {
        if(error) console.log("Error in Products " + error);
        res.status(204).end(); 
    });
});

//Export the router
module.exports = router;
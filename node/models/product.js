const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    productcode: String,
    name: String,
    price: String,
    quantity: String,
    image: String
}, {collection: 'products'});

const Product = (module.exports=mongoose.model('Product', ProductSchema));
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProductSchema = new Schema({
    name: String,
    product_id: Number
})

const Product = mongoose.model("product", ProductSchema);

module.exports = Product;
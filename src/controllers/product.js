const Product = require('../models/product')

module.exports = {
    getProduct: (req, res) => {
        Product.find({})
        .then(data => {
            res.send({
                message: "your List Product",
                data
            })
        })
        .catch(error => {
            res.send({
                message: "ups failed brow productnya",
                error
            })
        } )
    },
    addProduct : (req, res) => {
        const {name, product_id} = req.body
        Product.create({
            name,
            product_id
        }).then(data => {
            res.send({
                message: "product added",
                data
            });
        })
        .catch(error => {
            res.send({
                message: "ups failed add product",
                error
            })
        } )
    }
}
const Order = require('../models/order')

module.exports = {
    getOrder: (req, res) => {
        Order.find({})
        .then(data => {
            res.send({
                message: "your List Order",
                data
            })
        })
        .catch(error => {
            res.send({
                message: "ups failed brow ordernya",
                error
            })
        } )
    },
    addOrder : (req, res) => {
        const {status, product_id} = req.body;
        Order.create({
            status,
            product_id
        })
        .then(data => {
            res.send({
                message: "list order",
                data
            });
        })
        .catch(error => {
            res.send({
                message: "ups failed see list order",
                error
            })
        } )
    },
    getOrderDetails: (req, res) => {
        Order.aggregate([
            {
                $lookup: {
                    from: "products",
                    localField: "product_id",
                    foreignField: "product_id",
                    as: "orderDetails"
                }
            }
        ])
        .then(data => {
            res.send(data);
        })
        .catch(error => {
            res.send(error);
        });
    }
}
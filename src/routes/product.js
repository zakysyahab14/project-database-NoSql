const router = require("express").Router();

const productController = require("../controllers/product");

router.get("/", productController.getProduct);
router.post("/", productController.addProduct);
// router.get("/detail", productController.getProductDetails);

module.exports = router;
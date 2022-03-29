const router = require('express').Router();
const productController = require('../controllers/product.controller');

router.post('/create', productController.createProduct);

module.exports = router

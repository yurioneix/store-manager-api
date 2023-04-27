const express = require('express');
const { productsController, oneProductController } = require('../controllers');

const router = express.Router();

router.get('/', productsController.listProducts);

router.get('/:id', oneProductController.getProductById);

module.exports = router;
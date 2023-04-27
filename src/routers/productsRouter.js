const express = require('express');
const { productsController,
  oneProductController, 
  newProductController,
} = require('../controllers');

const router = express.Router();

router.get('/', productsController.listProducts);

router.get('/:id', oneProductController.getProductById);

router.post('/', newProductController.newProduct);

module.exports = router;
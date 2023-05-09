const express = require('express');
const { productsController,
  oneProductController, 
  newProductController,
  updateProductController,
} = require('../controllers');

const router = express.Router();

router.get('/', productsController.listProducts);

router.get('/:id', oneProductController.getProductById);

router.post('/', newProductController.newProduct);

router.put('/:id', updateProductController.updateProduct);

module.exports = router;
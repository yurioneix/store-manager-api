const express = require('express');

const { createSaleController, salesController } = require('../controllers');
const { validateSales } = require('../middlewares/validateSales');
const { validateExistingProductId } = require('../middlewares/validateExistingProductId');

const router = express.Router();

router.post('/', validateSales, validateExistingProductId, createSaleController.createSale);

router.get('/', salesController.listSales);

module.exports = router;

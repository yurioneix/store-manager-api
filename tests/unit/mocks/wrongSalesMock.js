const saleWithoutProductID = [
  {
    quantity: 1,
  },
  {
    productId: 2,
    quantity: 5,
  },
];

const saleWithoutQuantity = [
  {
    productId: 1,
  },
  {
    productId: 2,
    quantity: 5,
  },
];
  
const saleWithLowQuantity = [
  {
    productId: 1,
    quantity: 0,
  },
  {
    productId: 2,
    quantity: 5,
  },
];

module.exports = { saleWithoutProductID, saleWithoutQuantity, saleWithLowQuantity };

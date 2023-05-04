const connection = require('./connection');

const createSale = async () => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO StoreManager.sales (date) VALUES (NOW());',
  );
  return insertId;
};

const createSaleProducts = async (saleID, productID, quantity) => {
  const [{ affectedRows }] = await connection.execute(
    'INSERT INTO StoreManager.sales_products (?, ?, ?)', [saleID, productID, quantity],
  );
  console.log(affectedRows);
  return affectedRows;
};

module.exports = { createSale, createSaleProducts };
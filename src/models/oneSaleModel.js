const camelize = require('camelize');
const connection = require('./connection');

const getSaleById = async (id) => {
  const [sale] = await connection.execute(
    `
    SELECT sales.date, sales_products.product_id, sales_products.quantity
    FROM sales
    INNER JOIN sales_products ON sales.id = sales_products.product_id
    WHERE sales_products.sale_id = ?; 
    `,
    [id],
  );
  return camelize(sale);
};

module.exports = { getSaleById };

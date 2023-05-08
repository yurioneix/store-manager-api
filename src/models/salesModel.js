const camelize = require('camelize');
const connection = require('./connection');

const getAll = async () => {
  const [sales] = await connection.execute(
    `
    SELECT sales.date, sales_products.* 
    FROM sales
    RIGHT JOIN sales_products ON sales.id = sales_products.product_id;
    `,
  );
  // console.log('sales', camelize(sales));
  return camelize(sales);
};

module.exports = { getAll };

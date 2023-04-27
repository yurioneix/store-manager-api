const connection = require('./connection');

const insert = async (newProduct) => {
  const { name } = newProduct;
  const [{ insertId }] = await connection.execute(
    'INSERT INTO StoreManager.products (name) VALUES (?)', [name],
  );
  return insertId;
};

module.exports = { insert };
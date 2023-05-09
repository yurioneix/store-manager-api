const connection = require('./connection');

const update = async (name, id) => {
  const [{ changedRows }] = await connection.execute(
    'UPDATE products SET name = ? WHERE id = ?;',
    [name, id],
  );
  return changedRows;
};

module.exports = { update };
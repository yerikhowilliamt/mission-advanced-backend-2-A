const dbPool = require("../config/database");

const getAllOrdersPembayaran = () => {
  const SQLQuery = "SELECT * FROM orders_pembayaran";
  return dbPool.execute(SQLQuery);
};

const createNewOrdersPembayaran = (body) => {
  const { id_orders, id_pembayaran } = body;
  const SQLQuery = `INSERT INTO order_pembayaran (id_orders, id_pembayaran) VALUES (?, ?)`;
  return dbPool.execute(SQLQuery, [id_orders, id_pembayaran]);
};

const updateOrdersPembayaran = (body, id) => {
  const { id_orders, id_pembayaran } = body;
  const SQLQuery = `UPDATE orders_pembayaran SET id_orders = ?, id_pembayaran = ? WHERE id = ?`;
  return dbPool.execute(SQLQuery, [id, id_orders, id_pembayaran]);
};

const deleteOrdersPembayaran = (id) => {
  const SQLQuery = `DELETE FROM orders_pembayaran WHERE id=?`;
  return dbPool.execute(SQLQuery, [id]);
};

module.exports = {
  getAllOrdersPembayaran,
  createNewOrdersPembayaran,
  updateOrdersPembayaran,
  deleteOrdersPembayaran,
};

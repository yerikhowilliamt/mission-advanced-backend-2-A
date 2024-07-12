const dbPool = require("../config/database");

const getAllOrdersKelas = () => {
  const SQLQuery = "SELECT * FROM orders_kelas";
  return dbPool.execute(SQLQuery);
};

const createNewOrdersKelas = (body) => {
  const { id_orders, id_kelas_saya } = body;
  const SQLQuery = `INSERT INTO order_kelas (id_orders, id_kelas_saya) VALUES (?, ?)`;
  return dbPool.execute(SQLQuery, [id_orders, id_kelas_saya]);
};

const updateOrdersKelas = (body, id) => {
  const { id_orders, id_kelas_saya } = body;
  const SQLQuery = `UPDATE orders_kelas SET id_orders = ?, id_kelas_saya = ? WHERE id = ?`;
  return dbPool.execute(SQLQuery, [id, id_orders, id_kelas_saya]);
};

const deleteOrdersKelas = (id) => {
  const SQLQuery = `DELETE FROM orders_kelas WHERE id=?`;
  return dbPool.execute(SQLQuery, [id]);
};

module.exports = {
  getAllOrdersKelas,
  createNewOrdersKelas,
  updateOrdersKelas,
  deleteOrdersKelas,
};

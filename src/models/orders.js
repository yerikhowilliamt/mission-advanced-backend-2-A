const dbPool = require("../config/database");

const getAllOrders = () => {
  const SQLQuery = "SELECT * FROM orders";
  return dbPool.execute(SQLQuery);
};

const createNewOrders = (body) => {
  const {
    invoice,
    nama,
    waktu_transaksi,
    total_pembayaran,
    harga,
    status_pembayaran,
  } = body;
  const SQLQuery = `INSERT INTO orders (invoice, nama, waktu_transaksi, total_pembayaran, harga, status_pembayaran) VALUES (?, ?, ?, ?, ?, ?)`;
  return dbPool.execute(SQLQuery, [
    invoice,
    nama,
    waktu_transaksi,
    total_pembayaran,
    harga,
    status_pembayaran,
  ]);
};

const updateOrders = (body, id) => {
  const {
    invoice,
    nama,
    waktu_transaksi,
    total_pembayaran,
    harga,
    status_pembayaran,
  } = body;
  const SQLQuery = `UPDATE orders SET nama = ?, invoice = ?, waktu_transaksi = ?, total_pembayaran = ?, harga = ?, status_pembayaran = ? WHERE id = ?`;
  return dbPool.execute(SQLQuery, [
    id,
    invoice,
    nama,
    waktu_transaksi,
    total_pembayaran,
    harga,
    status_pembayaran,
  ]);
};

const deleteOrders = (id) => {
  const SQLQuery = `DELETE FROM orders WHERE id=?`;
  return dbPool.execute(SQLQuery, [id]);
};

module.exports = {
  getAllOrders,
  createNewOrders,
  updateOrders,
  deleteOrders,
};

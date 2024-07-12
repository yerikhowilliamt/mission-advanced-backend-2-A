const dbPool = require("../config/database");

const getAllPembayaran = () => {
  const SQLQuery = "SELECT * FROM pembayaran";
  return dbPool.execute(SQLQuery);
};

const createNewPembayaran = (body) => {
  const { kode, nama, jenis_pembayaran } = body;
  const SQLQuery = `INSERT INTO pembayaran (kode, nama, jenis_pembayaran) VALUES (?, ?, ?)`;
  return dbPool.execute(SQLQuery, [kode, nama, jenis_pembayaran]);
};

const updatePembayaran = (body, id) => {
  const { kode, nama, jenis_pembayaran } = body;
  const SQLQuery = `UPDATE pembayaran SET kode = ?, nama = ?, jenis_pembayaran = ? WHERE id = ?`;
  return dbPool.execute(SQLQuery, [id, kode, nama, jenis_pembayaran]);
};

const deletePembayaran = (id) => {
  const SQLQuery = `DELETE FROM pembayaran WHERE id=?`;
  return dbPool.execute(SQLQuery, [id]);
};

module.exports = { getAllPembayaran, createNewPembayaran, updatePembayaran, deletePembayaran };

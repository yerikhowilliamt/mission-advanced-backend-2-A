const dbPool = require("../config/database");

const getAllTransaksiKelas = () => {
  const SQLQuery = "SELECT * FROM transaksi_kelas";
  return dbPool.execute(SQLQuery);
};

const createNewTransaksiKelas = (body) => {
  const { id_kelas, id_pembayaran } = body;
  const SQLQuery = `INSERT INTO transaksi_kelas (id_kelas, id_pembayaran) VALUES (?, ?)`;
  return dbPool.execute(SQLQuery, [id_kelas, id_pembayaran]);
};

const updateTransaksiKelas = (body, id) => {
  const { id_kelas, id_pembayaran } = body;
  const SQLQuery = `UPDATE transaksi_kelas SET id_kelas = ?, id_pembayaran = ? WHERE id = ?`;
  return dbPool.execute(SQLQuery, [id, id_kelas, id_pembayaran]);
};

const deleteTransaksiKelas = (id) => {
  const SQLQuery = `DELETE FROM transaksi_kelas WHERE id=?`;
  return dbPool.execute(SQLQuery, [id]);
};

module.exports = { getAllTransaksiKelas, createNewTransaksiKelas, updateTransaksiKelas, deleteTransaksiKelas };

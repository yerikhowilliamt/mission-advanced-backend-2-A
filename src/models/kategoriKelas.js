const dbPool = require("../config/database");

const getAllKategoriKelas = () => {
  const SQLQuery = "SELECT * FROM kategori_kelas";
  return dbPool.execute(SQLQuery);
};

const createNewKategoriKelas = (body) => {
  const { nama } = body;
  const SQLQuery = `INSERT INTO kategori_kelas (nama) VALUES (?)`;
  return dbPool.execute(SQLQuery, [nama]);
};

const updateKategoriKelas = (body, id) => {
  const { nama } = body;
  const SQLQuery = `UPDATE kategori_kelas SET nama = ? WHERE id=?`;
  return dbPool.execute(SQLQuery, [nama, id]);
};

const deleteKategoriKelas = (id) => {
  const SQLQuery = `DELETE FROM kategori_kelas WHERE id=?`;
  return dbPool.execute(SQLQuery, [id]);
};

module.exports = {
  getAllKategoriKelas,
  createNewKategoriKelas,
  updateKategoriKelas,
  deleteKategoriKelas,
};

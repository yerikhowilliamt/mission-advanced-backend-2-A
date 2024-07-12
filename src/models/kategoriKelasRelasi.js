const dbPool = require("../config/database");

const getAllKategoriKelasRelasi = () => {
  const SQLQuery = "SELECT * FROM kategori_kelas_relasi";
  return dbPool.execute(SQLQuery);
};

const createNewKategoriKelasRelasi = (body) => {
  const { nama } = body;
  const SQLQuery = `INSERT INTO kategori_kelas_relasi (nama) VALUES (?)`;
  return dbPool.execute(SQLQuery, [nama]);
};

const updateKategoriKelasRelasi = (body, id) => {
  const { nama } = body;
  const SQLQuery = `UPDATE kategori_kelas_relasi SET nama = ? WHERE id=?`;
  return dbPool.execute(SQLQuery, [nama, id]);
};

const deleteKategoriKelasRelasi = (id) => {
  const SQLQuery = `DELETE FROM kategori_kelas_relasi WHERE id=?`;
  return dbPool.execute(SQLQuery, [id]);
};

module.exports = {
  getAllKategoriKelasRelasi,
  createNewKategoriKelasRelasi,
  updateKategoriKelasRelasi,
  deleteKategoriKelasRelasi,
};

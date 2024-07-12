const dbPool = require("../config/database");

const getAllModulKelas = () => {
  const SQLQuery = "SELECT * FROM modul_kelas";
  return dbPool.execute(SQLQuery);
};

const createNewModulKelas = (nama) => {
  const SQLQuery = `INSERT INTO modul_kelas (nama) VALUES (?)`;
  return dbPool.execute(SQLQuery, [nama]);
};

const updateModulKelas = (id, nama) => {
  const SQLQuery = `UPDATE modul_kelas SET nama = ? WHERE id = ?`;
  return dbPool.execute(SQLQuery, [nama, id]);
};

const deleteModulKelas = (id) => {
  const SQLQuery = `DELETE FROM modul_kelas WHERE id = ?`;
  return dbPool.execute(SQLQuery, [id]);
};

module.exports = {
  getAllModulKelas,
  createNewModulKelas,
  updateModulKelas,
  deleteModulKelas,
};

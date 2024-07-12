const dbPool = require("../config/database");

const getAllKelasSaya = () => {
  const SQLQuery = "SELECT * FROM kelas_saya";
  return dbPool.execute(SQLQuery);
};

const createNewKelasSaya = (body) => {
  const { progres_kelas, status_kelas } = body;
  const SQLQuery = `INSERT INTO kelas_saya (progres_kelas, status_kelas) VALUES (?, ?)`;
  return dbPool.execute(SQLQuery, [progres_kelas, status_kelas]);
};

const updateKelasSaya = (body, id) => {
  const { progres_kelas, status_kelas } = body;
  const SQLQuery = `UPDATE kelas_saya SET progres_kelas=?, status_kelas=? WHERE id=?`;
  return dbPool.execute(SQLQuery, [progres_kelas, status_kelas, id]);
};

const deleteKelasSaya = (id) => {
  const SQLQuery = `DELETE FROM kelas_saya WHERE id=?`;
  return dbPool.execute(SQLQuery, [id]);
};

module.exports = {
  getAllKelasSaya,
  createNewKelasSaya,
  updateKelasSaya,
  deleteKelasSaya,
};

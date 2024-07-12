const dbPool = require("../config/database");

const getAllMaterial = () => {
  const SQLQuery = "SELECT * FROM material";
  return dbPool.execute(SQLQuery);
};

const createNewMaterial = (body) => {
  const { progres_kelas, status_kelas } = body;
  const SQLQuery = `INSERT INTO material (progres_kelas, status_kelas) VALUES (?, ?)`;
  return dbPool.execute(SQLQuery, [progres_kelas, status_kelas]);
};

const updateMaterial = (body, id) => {
  const { progres_kelas, status_kelas } = body;
  const SQLQuery = `UPDATE material SET progres_kelas=?, status_kelas=? WHERE id=?`;
  return dbPool.execute(SQLQuery, [progres_kelas, status_kelas, id]);
};

const deleteMaterial = (id) => {
  const SQLQuery = `DELETE FROM material WHERE id=?`;
  return dbPool.execute(SQLQuery, [id]);
};

module.exports = {
  getAllMaterial,
  createNewMaterial,
  updateMaterial,
  deleteMaterial,
};

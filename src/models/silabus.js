const dbPool = require("../config/database");

const getAllSilabus = () => {
  const SQLQuery = "SELECT * FROM silabus";
  return dbPool.execute(SQLQuery);
};

const createNewSilabus = (body) => {
  const { id_kelas, id_modul } = body;
  const SQLQuery = `INSERT INTO silabus (id_kelas, id_modul) VALUES (?, ?)`;
  return dbPool.execute(SQLQuery, [id_kelas, id_modul]);
};

const updateSilabus = (body, id) => {
  const { id_kelas, id_modul } = body;
  const SQLQuery = `UPDATE silabus SET id_kelas = ?, id_modul = ? WHERE id = ?`;
  return dbPool.execute(SQLQuery, [id, id_kelas, id_modul]);
};

const deleteSilabus = (id) => {
  const SQLQuery = `DELETE FROM silabus WHERE id=?`;
  return dbPool.execute(SQLQuery, [id]);
};

module.exports = { getAllSilabus, createNewSilabus, updateSilabus, deleteSilabus };

const dbPool = require("../config/database");

const getAllPretestKelas = () => {
  const SQLQuery = "SELECT * FROM pretest_kelas";
  return dbPool.execute(SQLQuery);
};

const createNewPretestKelas = (body) => {
  const { id_pretest, id_kelas_saya } = body;
  const SQLQuery = `INSERT INTO pretest_kelas (id_pretest, id_kelas_saya) VALUES (?, ?)`;
  return dbPool.execute(SQLQuery, [id_pretest, id_kelas_saya]);
};

const updatePretestKelas = (body, id) => {
  const { id_pretest, id_kelas_saya } = body;
  const SQLQuery = `UPDATE pretest_kelas SET id_pretest = ?, id_kelas_saya = ? WHERE id = ?`;
  return dbPool.execute(SQLQuery, [id, id_pretest, id_kelas_saya]);
};

const deletePretestKelas = (id) => {
  const SQLQuery = `DELETE FROM pretest_kelas WHERE id=?`;
  return dbPool.execute(SQLQuery, [id]);
};

module.exports = { getAllPretestKelas, createNewPretestKelas, updatePretestKelas, deletePretestKelas };

const dbPool = require("../config/database");

const getAllMengajar = () => {
  const SQLQuery = "SELECT * FROM mengajar";
  return dbPool.execute(SQLQuery);
};

const createNewMengajar = (body) => {
  const { id_kelas, email_tutor } = body;
  const SQLQuery = `INSERT INTO mengajar (id_kelas, email_tutor) VALUES (?, ?)`;
  return dbPool.execute(SQLQuery, [id_kelas, email_tutor]);
};

const updateMengajar = (id, body) => {
  const { id_kelas, email_tutor } = body;
  const SQLQuery = `UPDATE mengajar SET id_kelas = ?, email_tutor = ? WHERE id = ?`;
  return dbPool.execute(SQLQuery, [id_kelas, email_tutor, id]);
};

const deleteMengajar = (id) => {
  const SQLQuery = `DELETE FROM mengajar WHERE id = ?`;
  return dbPool.execute(SQLQuery, [id]);
};

module.exports = {
  getAllMengajar,
  createNewMengajar,
  updateMengajar,
  deleteMengajar,
};

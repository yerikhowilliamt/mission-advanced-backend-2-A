const dbPool = require("../config/database");

const getAllTutors = () => {
  const SQLQuery = "SELECT * FROM tutor";
  return dbPool.execute(SQLQuery);
};

const createNewTutor = (body) => {
  const { email, nama, jabatan, perusahaan } = body;
  const SQLQuery = `INSERT INTO tutor (email, nama, jabatan, perusahaan) VALUES (?, ?, ?, ?)`;
  return dbPool.execute(SQLQuery, [email, nama, jabatan, perusahaan]);
};

const updateTutor = (body, email) => {
  const { nama, jabatan, perusahaan } = body;
  const SQLQuery = `UPDATE tutor SET nama = ?, jabatan = ?, perusahaan = ? WHERE email = ?`;
  return dbPool.execute(SQLQuery, [email, nama, jabatan, perusahaan]);
};

const deleteTutor = (email) => {
  const SQLQuery = `DELETE FROM tutor WHERE email=?`;
  return dbPool.execute(SQLQuery, [email]);
};

module.exports = { getAllTutors, createNewTutor, updateTutor, deleteTutor };

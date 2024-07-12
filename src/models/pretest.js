const dbPool = require("../config/database");

const getAllPretest = () => {
  const SQLQuery = "SELECT * FROM pretest";
  return dbPool.execute(SQLQuery);
};

const createNewPretest = (body) => {
  const { judul_pertanyaan, list_soal, opsi_jawaban, pertanyaan } = body;
  const SQLQuery = `INSERT INTO pretest (judul_pertanyaan, list_soal, opsi_jawaban, pertanyaan) VALUES (?, ?, ?, ?)`;
  return dbPool.execute(SQLQuery, [
    judul_pertanyaan,
    list_soal,
    opsi_jawaban,
    pertanyaan,
  ]);
};

const updatePretest = (body, id) => {
  const { judul_pertanyaan, list_soal, opsi_jawaban, pertanyaan } = body;
  const SQLQuery = `UPDATE pretest SET judul_pertanyaan = ?, list_soal = ?, opsi_jawaban = ?, pertanyaan = ? WHERE id = ?`;
  return dbPool.execute(SQLQuery, [
    id,
    judul_pertanyaan,
    list_soal,
    opsi_jawaban,
    pertanyaan,
  ]);
};

const deletePretest = (id) => {
  const SQLQuery = `DELETE FROM pretest WHERE id=?`;
  return dbPool.execute(SQLQuery, [id]);
};

module.exports = {
  getAllPretest,
  createNewPretest,
  updatePretest,
  deletePretest,
};

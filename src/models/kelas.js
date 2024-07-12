const dbPool = require("../config/database");

const getAllKelas = () => {
  const SQLQuery = "SELECT * FROM kelas";
  return dbPool.execute(SQLQuery);
};

const createNewKelas = (body) => {
  const { nama, harga, deskripsi, background_foto, video } = body;
  const SQLQuery = `INSERT INTO kelas (nama, harga, deskripsi, background_foto, video) VALUES (?, ?, ?, ?, ?)`;
  return dbPool.execute(SQLQuery, [
    nama,
    harga,
    deskripsi,
    background_foto,
    video,
  ]);
};

const updateKelas = (body, id) => {
  const { nama, harga, deskripsi, background_foto, video } = body;
  const SQLQuery = `UPDATE kelas SET nama = ?, harga = ?, deskripsi = ?, background_foto = ?, video = ? WHERE id=?`;
  return dbPool.execute(SQLQuery, [
    nama,
    harga,
    deskripsi,
    background_foto,
    video,
    id,
  ]);
};

const deleteKelas = (id) => {
  const SQLQuery = `DELETE FROM kelas WHERE id=?`;
  return dbPool.execute(SQLQuery, [id]);
};

module.exports = { getAllKelas, createNewKelas, updateKelas, deleteKelas };

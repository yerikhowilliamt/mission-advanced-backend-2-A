const dbPool = require("../config/database");

const getAllKelas = (filterParams = {}, orderBy = 'nama', sort = 'ASC', search = '') => {
  const { nama, harga } = filterParams;
  let SQLQuery = "SELECT * FROM kelas WHERE 1 = 1";

  if (nama) {
    SQLQuery += ` AND nama LIKE '%${nama}%'`;
  }

  if (harga) {
    SQLQuery += ` AND harga = ${harga}`;
  }

  if (search) {
    SQLQuery += ` AND (nama LIKE '%${search}%' OR deskripsi LIKE '%${search}%')`;
  }

  SQLQuery += ` ORDER BY ${orderBy} ${sort}`;

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

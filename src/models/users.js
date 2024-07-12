const dbPool = require("../config/database");

const getAllUsers = () => {
  const SQLQuery = "SELECT * FROM user";
  return dbPool.execute(SQLQuery);
};

const createNewUser = (body) => {
  const { email, nama, kata_sandi, nomor_hp, jenis_kelamin, foto_profile } = body;
  const SQLQuery = `INSERT INTO user (email, nama, kata_sandi, nomor_hp, jenis_kelamin, foto_profile) 
                    VALUES (?, ?, ?, ?, ?, ?)`;
  return dbPool.execute(SQLQuery, [email, nama, kata_sandi, nomor_hp, jenis_kelamin, foto_profile]);
};

const updateUser = (body, email) => {
  const { nama, kata_sandi, nomor_hp, jenis_kelamin, foto_profile } = body;
  const SQLQuery = `UPDATE user SET nama=?, kata_sandi=?, nomor_hp=?, jenis_kelamin=?, foto_profile=? WHERE email=?`;
  return dbPool.execute(SQLQuery, [nama, kata_sandi, nomor_hp, jenis_kelamin, foto_profile, email]);
};

const deleteUser = (email) => {
  const SQLQuery = `DELETE FROM user WHERE email=?`;
  return dbPool.execute(SQLQuery, [email]);
};

module.exports = { getAllUsers, createNewUser, updateUser, deleteUser };

const dbPool = require("../config/database");

const getAllModulMaterial = () => {
  const SQLQuery = "SELECT * FROM modul_material";
  return dbPool.execute(SQLQuery);
};

const createNewModulMaterial = (body) => {
  const { id_material, id_modul_kelas } = body;
  const SQLQuery = `INSERT INTO modul_material (id_material, id_modul_kelas) VALUES (?, ?)`;
  return dbPool.execute(SQLQuery, [id_material, id_modul_kelas]);
};

const updateModulMaterial = (body, id) => {
  const { id_material, id_modul_kelas } = body;
  const SQLQuery = `UPDATE modul_material SET id_material = ?, id_modul_kelas = ? WHERE id = ?`;
  return dbPool.execute(SQLQuery, [id, id_material, id_modul_kelas]);
};

const deleteModulMaterial = (id) => {
  const SQLQuery = `DELETE FROM modul_material WHERE id=?`;
  return dbPool.execute(SQLQuery, [id]);
};

module.exports = {
  getAllModulMaterial,
  createNewModulMaterial,
  updateModulMaterial,
  deleteModulMaterial,
};

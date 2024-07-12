const KategoriKelasModel = require("../models/kategoriKelas");

const getAllKategoriKelas = async (req, res) => {
  try {
    const [data] = await KategoriKelasModel.getAllKategoriKelas();
    res.json({
      message: "GET all kategori kelas success",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

const createNewKategoriKelas = async (req, res) => {
  const { body } = req;

  try {
    await KategoriKelasModel.createNewKategoriKelas(body);
    res.json({
      message: "CREATE new kategori kelas success",
      data: body,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

const updateKategoriKelas = async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  try {
    await KategoriKelasModel.updateKategoriKelas(body, id);
    res.json({
      message: "UPDATE kategori kelas success",
      data: req.body,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

const deleteKategoriKelas = async (req, res) => {
  const { id } = req.params;

  try {
    await KategoriKelasModel.deleteKategoriKelas(id);
    res.json({
      message: "DELETE kategori kelas success",
      data: null,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

module.exports = {
  getAllKategoriKelas,
  createNewKategoriKelas,
  updateKategoriKelas,
  deleteKategoriKelas,
};

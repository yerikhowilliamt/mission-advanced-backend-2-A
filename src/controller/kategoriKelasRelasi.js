const KategoriKelasRelasiModel = require("../models/kategoriKelasRelasi");

const getAllKategoriKelasRelasi = async (req, res) => {
  try {
    const [data] = await KategoriKelasRelasiModel.getAllKategoriKelasRelasi();
    res.json({
      message: "GET all kategori kelas relasi success",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

const createNewKategoriKelasRelasi = async (req, res) => {
  const { body } = req;

  try {
    await KategoriKelasRelasiModel.createNewKategoriKelasRelasi(body);
    res.json({
      message: "CREATE new kategori kelas relasi success",
      data: body,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

const updateKategoriKelasRelasi = async (req, res) => {
  const { email } = req.params;
  const { body } = req;
  try {
    await KategoriKelasRelasiModel.updateKategoriKelasRelasi(body, email);
    res.json({
      message: "UPDATE kategori kelas relasi success",
      data: req.body,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

const deleteKategoriKelasRelasi = async (req, res) => {
  const { email } = req.params;

  try {
    await KategoriKelasRelasiModel.deleteKategoriKelasRelasi(email);
    res.json({
      message: "DELETE kategori kelas relasi success",
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
  getAllKategoriKelasRelasi,
  createNewKategoriKelasRelasi,
  updateKategoriKelasRelasi,
  deleteKategoriKelasRelasi,
};

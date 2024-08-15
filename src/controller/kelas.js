const KelasModel = require("../models/kelas");

const getAllKelas = async (req, res) => {
  const { nama, harga, orderBy = 'nama', sort = 'asc', search = '' } = req.query;

  const filterParams = {};
  if (nama) filterParams.nama = nama;
  if (harga) filterParams.harga = harga;

  try {
    const data = await KelasModel.getAllKelas(filterParams, orderBy, sort, search);

    if (!data || data.length === 0) {
      return res.status(404).json({
        message: 'Kelas not found',
      });
    }

    res.json({
      message: 'GET data kelas success',
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Server Error',
      serverMessage: error.message,
    });
  }
};

const createNewKelas = async (req, res) => {
  const { body } = req;

  try {
    const newKelas = await KelasModel.createNewKelas(body);
    res.json({
      message: "CREATE new kelas success",
      data: newKelas,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error.message,
    });
  }
};

const updateKelas = async (req, res) => {
  const { id } = req.params;
  const { body } = req;

  const numericId = parseInt(id, 10);

  if (isNaN(numericId)) {
    return res.status(400).json({ message: 'Invalid ID format' });
  }

  try {
    const updatedKelas = await KelasModel.updateKelas(body, numericId);
    res.json({
      message: "UPDATE kelas success",
      data: updatedKelas,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error.message,
    });
  }
};

const deleteKelas = async (req, res) => {
  const { id } = req.params;

  const numericId = parseInt(id, 10);

  if (isNaN(numericId)) {
    return res.status(400).json({ message: 'Invalid ID format' });
  }

  try {
    await KelasModel.deleteKelas(numericId);
    res.json({
      message: "DELETE kelas success",
      data: null,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error.message,
    });
  }
};

module.exports = { getAllKelas, createNewKelas, updateKelas, deleteKelas };

const KelasModel = require("../models/kelas");

const getAllKelas = async (req, res) => {
  try {
    const [data] = await KelasModel.getAllKelas();
    res.json({
      message: "GET all kelas success",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

const createNewKelas = async (req, res) => {
  const { body } = req;

  try {
    await KelasModel.createNewKelas(body);
    res.json({
      message: "CREATE new kelas success",
      data: body,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

const updateKelas = async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  try {
    await KelasModel.updateKelas(body, id);
    res.json({
      message: "UPDATE kelas success",
      data: req.body,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

const deleteKelas = async (req, res) => {
  const { id } = req.params;

  try {
    await KelasModel.deleteKelas(id);
    res.json({
      message: "DELETE kelas success",
      data: null,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

module.exports = { getAllKelas, createNewKelas, updateKelas, deleteKelas };

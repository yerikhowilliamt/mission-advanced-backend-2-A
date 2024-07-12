const ModulKelasModel = require("../models/modulKelas");

const getAllModulKelas = async (req, res) => {
  try {
    const [data] = await ModulKelasModel.getAllModulKelas();
    res.json({
      message: "GET all modul kelas success",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

const createNewModulKelas = async (req, res) => {
  const { body } = req;

  try {
    await ModulKelasModel.createNewModulKelas(body);
    res.json({
      message: "CREATE new modul kelas success",
      data: body,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

const updateModulKelas = async (req, res) => {
  const { email } = req.params;
  const { body } = req;
  try {
    await ModulKelasModel.updateModulKelas(body, email);
    res.json({
      message: "UPDATE modul kelas success",
      data: req.body,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

const deleteModulKelas = async (req, res) => {
  const { email } = req.params;

  try {
    await ModulKelasModel.deleteModulKelas(email);
    res.json({
      message: "DELETE modul kelas success",
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
  getAllModulKelas,
  createNewModulKelas,
  updateModulKelas,
  deleteModulKelas,
};

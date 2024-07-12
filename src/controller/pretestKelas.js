const PretestKelasModel = require("../models/pretestKelas");

const getAllPretestKelas = async (req, res) => {
  try {
    const [data] = await PretestKelasModel.getAllPretestKelas();
    res.json({
      message: "GET all pretest kelas success",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

const createNewPretestKelas = async (req, res) => {
  const { body } = req;

  try {
    await PretestKelasModel.createNewPretestKelas(body);
    res.json({
      message: "CREATE new pretest kelas success",
      data: body,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

const updatePretestKelas = async (req, res) => {
  const { email } = req.params;
  const { body } = req;
  try {
    await PretestKelasModel.updatePretestKelas(body, email);
    res.json({
      message: "UPDATE pretest kelas success",
      data: req.body,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

const deletePretestKelas = async (req, res) => {
  const { email } = req.params;

  try {
    await PretestKelasModel.deletePretestKelas(email);
    res.json({
      message: "DELETE pretest kelas success",
      data: null,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

module.exports = { getAllPretestKelas, createNewPretestKelas, updatePretestKelas, deletePretestKelas };

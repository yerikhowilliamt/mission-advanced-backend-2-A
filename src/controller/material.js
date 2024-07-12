const MaterialModel = require("../models/material");

const getAllMaterial = async (req, res) => {
  try {
    const [data] = await MaterialModel.getAllMaterial();
    res.json({
      message: "GET all material success",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

const createNewMaterial = async (req, res) => {
  const { body } = req;

  try {
    await MaterialModel.createNewMaterial(body);
    res.json({
      message: "CREATE new material success",
      data: body,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

const updateMaterial = async (req, res) => {
  const { email } = req.params;
  const { body } = req;
  try {
    await MaterialModel.updateMaterial(body, email);
    res.json({
      message: "UPDATE material success",
      data: req.body,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

const deleteMaterial = async (req, res) => {
  const { email } = req.params;

  try {
    await MaterialModel.deleteMaterial(email);
    res.json({
      message: "DELETE material success",
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
  getAllMaterial,
  createNewMaterial,
  updateMaterial,
  deleteMaterial,
};

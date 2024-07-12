const ModulMaterialModel = require("../models/modulMaterial");

const getAllModulMaterial = async (req, res) => {
  try {
    const [data] = await ModulMaterialModel.getAllModulMaterial();
    res.json({
      message: "GET all modul material success",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

const createNewModulMaterial = async (req, res) => {
  const { body } = req;

  try {
    await ModulMaterialModel.createNewModulMaterial(body);
    res.json({
      message: "CREATE new modul material success",
      data: body,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

const updateModulMaterial = async (req, res) => {
  const { email } = req.params;
  const { body } = req;
  try {
    await ModulMaterialModel.updateModulMaterial(body, email);
    res.json({
      message: "UPDATE modul material success",
      data: req.body,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

const deleteModulMaterial = async (req, res) => {
  const { email } = req.params;

  try {
    await ModulMaterialModel.deleteModulMaterial(email);
    res.json({
      message: "DELETE modul material success",
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
  getAllModulMaterial,
  createNewModulMaterial,
  updateModulMaterial,
  deleteModulMaterial,
};

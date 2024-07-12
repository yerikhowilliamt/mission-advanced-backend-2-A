const SilabusModel = require("../models/silabus");

const getAllSilabus = async (req, res) => {
  try {
    const [data] = await SilabusModel.getAllSilabus();
    res.json({
      message: "GET all silabus success",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

const createNewSilabus = async (req, res) => {
  const { body } = req;

  try {
    await SilabusModel.createNewSilabus(body);
    res.json({
      message: "CREATE new silabus success",
      data: body,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

const updateSilabus = async (req, res) => {
  const { email } = req.params;
  const { body } = req;
  try {
    await SilabusModel.updateSilabus(body, email);
    res.json({
      message: "UPDATE silabus success",
      data: req.body,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

const deleteSilabus = async (req, res) => {
  const { email } = req.params;

  try {
    await SilabusModel.deleteSilabus(email);
    res.json({
      message: "DELETE silabus success",
      data: null,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

module.exports = { getAllSilabus, createNewSilabus, updateSilabus, deleteSilabus };

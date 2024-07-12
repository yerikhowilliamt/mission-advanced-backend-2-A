const MengajarModel = require("../models/mengajar");

const getAllMengajar = async (req, res) => {
  try {
    const [data] = await MengajarModel.getAllMengajar();
    res.json({
      message: "GET all mengajar success",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

const createNewMengajar = async (req, res) => {
  const { body } = req;

  try {
    await MengajarModel.createNewMengajar(body);
    res.json({
      message: "CREATE new mengajar success",
      data: body,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

const updateMengajar = async (req, res) => {
  const { email } = req.params;
  const { body } = req;
  try {
    await MengajarModel.updateMengajar(body, email);
    res.json({
      message: "UPDATE mengajar success",
      data: req.body,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

const deleteMengajar = async (req, res) => {
  const { email } = req.params;

  try {
    await MengajarModel.deleteMengajar(email);
    res.json({
      message: "DELETE mengajar success",
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
  getAllMengajar,
  createNewMengajar,
  updateMengajar,
  deleteMengajar,
};

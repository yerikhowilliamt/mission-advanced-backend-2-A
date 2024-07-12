const PretestModel = require("../models/pretest");

const getAllPretest = async (req, res) => {
  try {
    const [data] = await PretestModel.getAllPretest();
    res.json({
      message: "GET all pretest success",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

const createNewPretest = async (req, res) => {
  const { body } = req;

  try {
    await PretestModel.createNewPretest(body);
    res.json({
      message: "CREATE new pretest success",
      data: body,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

const updatePretest = async (req, res) => {
  const { email } = req.params;
  const { body } = req;
  try {
    await PretestModel.updatePretest(body, email);
    res.json({
      message: "UPDATE pretest success",
      data: req.body,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

const deletePretest = async (req, res) => {
  const { email } = req.params;

  try {
    await PretestModel.deletePretest(email);
    res.json({
      message: "DELETE pretest success",
      data: null,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

module.exports = { getAllPretest, createNewPretest, updatePretest, deletePretest };

const KelasSaya = require("../models/kelasSaya");

const getAllKelasSaya = async (req, res) => {
  try {
    const [data] = await KelasSaya.getAllKelasSaya();
    res.json({
      message: "GET all kelas saya success",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

const createNewKelasSaya = async (req, res) => {
  const { body } = req;

  try {
    await KelasSaya.createNewKelasSaya(body);
    res.json({
      message: "CREATE new kelas saya success",
      data: body,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

const updateKelasSaya = async (req, res) => {
  const { email } = req.params;
  const { body } = req;
  try {
    await KelasSaya.updateKelasSaya(body, email);
    res.json({
      message: "UPDATE kelas saya success",
      data: req.body,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

const deleteKelasSaya = async (req, res) => {
  const { email } = req.params;

  try {
    await KelasSaya.deleteKelasSaya(email);
    res.json({
      message: "DELETE kelas saya success",
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
  getAllKelasSaya,
  createNewKelasSaya,
  updateKelasSaya,
  deleteKelasSaya,
};

const PembayaranModel = require("../models/pembayaran");

const getAllPembayaran = async (req, res) => {
  try {
    const [data] = await PembayaranModel.getAllPembayaran();
    res.json({
      message: "GET all Pembayaran success",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

const createNewPembayaran = async (req, res) => {
  const { body } = req;

  try {
    await PembayaranModel.createNewPembayaran(body);
    res.json({
      message: "CREATE new Pembayaran success",
      data: body,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

const updatePembayaran = async (req, res) => {
  const { email } = req.params;
  const { body } = req;
  try {
    await PembayaranModel.updatePembayaran(body, email);
    res.json({
      message: "UPDATE Pembayaran success",
      data: req.body,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

const deletePembayaran = async (req, res) => {
  const { email } = req.params;

  try {
    await PembayaranModel.deletePembayaran(email);
    res.json({
      message: "DELETE Pembayaran success",
      data: null,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

module.exports = { getAllPembayaran, createNewPembayaran, updatePembayaran, deletePembayaran };

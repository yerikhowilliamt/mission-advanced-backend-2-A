const TransaksiKelasModel = require("../models/transaksiKelas");

const getAllTransaksiKelas = async (req, res) => {
  try {
    const [data] = await TransaksiKelasModel.getAllTransaksiKelas();
    res.json({
      message: "GET all transaksi kelas success",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

const createNewTransaksiKelas = async (req, res) => {
  const { body } = req;

  try {
    await TransaksiKelasModel.createNewTransaksiKelas(body);
    res.json({
      message: "CREATE new transaksi kelas success",
      data: body,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

const updateTransaksiKelas = async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  try {
    await TransaksiKelasModel.updateTransaksiKelas(body, id);
    res.json({
      message: "UPDATE transaksi kelas success",
      data: req.body,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

const deleteTransaksiKelas = async (req, res) => {
  const { id } = req.params;

  try {
    await TransaksiKelasModel.deleteTransaksiKelas(id);
    res.json({
      message: "DELETE transaksi kelas success",
      data: null,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

module.exports = { getAllTransaksiKelas, createNewTransaksiKelas, updateTransaksiKelas, deleteTransaksiKelas };

const OrdersPembayaranModel = require("../models/ordersPembayaran");

const getAllOrdersPembayaran = async (req, res) => {
  try {
    const [data] = await OrdersPembayaranModel.getAllOrdersPembayaran();
    res.json({
      message: "GET all orders pembayaran success",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

const createNewOrdersPembayaran = async (req, res) => {
  const { body } = req;

  try {
    await OrdersPembayaranModel.createNewOrdersPembayaran(body);
    res.json({
      message: "CREATE new orders pembayaran success",
      data: body,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

const updateOrdersPembayaran = async (req, res) => {
  const { email } = req.params;
  const { body } = req;
  try {
    await OrdersPembayaranModel.updateOrdersPembayaran(body, email);
    res.json({
      message: "UPDATE orders pembayaran success",
      data: req.body,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

const deleteOrdersPembayaran = async (req, res) => {
  const { email } = req.params;

  try {
    await OrdersPembayaranModel.deleteOrdersPembayaran(email);
    res.json({
      message: "DELETE orders pembayaran success",
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
  getAllOrdersPembayaran,
  createNewOrdersPembayaran,
  updateOrdersPembayaran,
  deleteOrdersPembayaran,
};

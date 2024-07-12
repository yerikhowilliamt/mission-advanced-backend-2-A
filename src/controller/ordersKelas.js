const OrdersKelasModel = require("../models/ordersKelas");

const getAllOrdersKelas = async (req, res) => {
  try {
    const [data] = await OrdersKelasModel.getAllOrdersKelas();
    res.json({
      message: "GET all orders kelas success",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

const createNewOrdersKelas = async (req, res) => {
  const { body } = req;

  try {
    await OrdersKelasModel.createNewOrdersKelas(body);
    res.json({
      message: "CREATE new orders kelas success",
      data: body,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

const updateOrdersKelas = async (req, res) => {
  const { email } = req.params;
  const { body } = req;
  try {
    await OrdersKelasModel.updateOrdersKelas(body, email);
    res.json({
      message: "UPDATE orders kelas success",
      data: req.body,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

const deleteOrdersKelas = async (req, res) => {
  const { email } = req.params;

  try {
    await OrdersKelasModel.deleteOrdersKelas(email);
    res.json({
      message: "DELETE orders kelas success",
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
  getAllOrdersKelas,
  createNewOrdersKelas,
  updateOrdersKelas,
  deleteOrdersKelas,
};

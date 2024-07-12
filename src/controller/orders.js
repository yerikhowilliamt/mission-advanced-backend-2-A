const OrdersModel = require("../models/orders");

const getAllOrders = async (req, res) => {
  try {
    const [data] = await OrdersModel.getAllOrders();
    res.json({
      message: "GET all orders success",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

const createNewOrders = async (req, res) => {
  const { body } = req;

  try {
    await OrdersModel.createNewOrders(body);
    res.json({
      message: "CREATE new orders success",
      data: body,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

const updateOrders = async (req, res) => {
  const { email } = req.params;
  const { body } = req;
  try {
    await OrdersModel.updateOrders(body, email);
    res.json({
      message: "UPDATE orders success",
      data: req.body,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

const deleteOrders = async (req, res) => {
  const { email } = req.params;

  try {
    await OrdersModel.deleteOrders(email);
    res.json({
      message: "DELETE orders success",
      data: null,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

module.exports = { getAllOrders, createNewOrders, updateOrders, deleteOrders };

const ReviewModel = require("../models/review");

const getAllReview = async (req, res) => {
  try {
    const [data] = await ReviewModel.getAllReview();
    res.json({
      message: "GET all review success",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

const createNewReview = async (req, res) => {
  const { body } = req;

  try {
    await ReviewModel.createNewReview(body);
    res.json({
      message: "CREATE new review success",
      data: body,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

const updateReview = async (req, res) => {
  const { email } = req.params;
  const { body } = req;
  try {
    await ReviewModel.updateReview(body, email);
    res.json({
      message: "UPDATE review success",
      data: req.body,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

const deleteReview = async (req, res) => {
  const { email } = req.params;

  try {
    await ReviewModel.deleteReview(email);
    res.json({
      message: "DELETE review success",
      data: null,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

module.exports = { getAllReview, createNewReview, updateReview, deleteReview };

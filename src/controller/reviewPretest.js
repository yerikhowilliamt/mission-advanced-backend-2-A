const ReviewPretestModel = require("../models/reviewPretest");

const getAllReviewPretest = async (req, res) => {
  try {
    const [data] = await ReviewPretestModel.getAllReviewPretest();
    res.json({
      message: "GET all review pretest success",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

const createNewReviewPretest = async (req, res) => {
  const { body } = req;

  try {
    await ReviewPretestModel.createNewReviewPretest(body);
    res.json({
      message: "CREATE new review pretest success",
      data: body,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

const updateReviewPretest = async (req, res) => {
  const { email } = req.params;
  const { body } = req;
  try {
    await ReviewPretestModel.updateReviewPretest(body, email);
    res.json({
      message: "UPDATE review pretest success",
      data: req.body,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

const deleteReviewPretest = async (req, res) => {
  const { email } = req.params;

  try {
    await ReviewPretestModel.deleteReviewPretest(email);
    res.json({
      message: "DELETE review pretest success",
      data: null,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

module.exports = { getAllReviewPretest, createNewReviewPretest, updateReviewPretest, deleteReviewPretest };

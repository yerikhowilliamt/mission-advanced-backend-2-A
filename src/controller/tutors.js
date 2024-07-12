const TutorsModel = require("../models/tutors");

const getAllTutors = async (req, res) => {
  try {
    const [data] = await TutorsModel.getAllTutors();
    res.json({
      message: "GET all tutors success",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

const createNewTutor = async (req, res) => {
  const { body } = req;

  try {
    await TutorsModel.createNewTutor(body);
    res.json({
      message: "CREATE new tutor success",
      data: body,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

const updateTutor = async (req, res) => {
  const { email } = req.params;
  const { body } = req;
  try {
    await TutorsModel.updateTutor(body, email);
    console.log("updated email : ", email);
    console.log("updated body : ", body);
    res.json({
      message: "UPDATE tutor success",
      data: req.body,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

const deleteTutor = async (req, res) => {
  const { email } = req.params;
  const { body } = req;

  try {
    await TutorsModel.deleteTutor(email);
    console.log("deleted email : ", email);
    console.log("deleted body : ", body);
    res.json({
      message: "DELETE tutors success",
      data: null,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error,
    });
  }
};

module.exports = { getAllTutors, createNewTutor, updateTutor, deleteTutor };

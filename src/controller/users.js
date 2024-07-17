const UsersModel = require("../models/users");
const dbPool = require("../config/database");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const sendEmail = require("../config/mail");

const getAllUsers = async (req, res) => {
  try {
    const [data] = await UsersModel.getAllUsers();
    res.status(200).json({
      message: "GET all users success",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error.message,
    });
  }
};

const register = async (req, res) => {
  const { body } = req;

  try {
    const hashedPassword = await bcrypt.hash(body.password, 10);
    body.password = hashedPassword;

    const newUser = await UsersModel.register(body);

    try {
      await sendEmail(body.email, newUser.emailToken);
      console.log("Verification email sent to:", body.email);
    } catch (error) {
      console.error("Failed to send verification email:", error);
    }

    res.status(201).json({
      message: "REGISTER success",
      data: newUser,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error.message,
    });
  }
};

const verifyEmail = async (req, res) => {
  const { token } = req.query;

  try {
    const SQLQuery = `SELECT * FROM user WHERE emailToken = ?`;
    const [rows, fields] = await dbPool.execute(SQLQuery, [token]);

    if (!rows || rows.length === 0) {
      return res.status(400).json({ message: "Invalid Verification Token" });
    }

    const updateUserQuery = `UPDATE user SET isVerified = true WHERE emailToken = ?`;
    await dbPool.execute(updateUserQuery, [token]);

    return res.status(200).json({ message: "Email Verified Successfully" });
  } catch (error) {
    console.error("Error during email verification:", error.message);
    return res.status(500).json({
      message: "Server Error",
      serverMessage: error.message,
    });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const [rows, fields] = await UsersModel.getUserByEmail(email);

    if (!rows || rows.length === 0) {
      return res.status(404).json({ message: "Email is incorrect." });
    }

    const user = rows[0];

    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (isPasswordMatch) {
      const payload = {
        id: user.id,
        fullname: user.fullname,
        username: user.username,
        email: user.email,
      };

      const secretKey = process.env.JWT_SECRET;

      const expiresIn = 60 * 60 * 1;

      const token = jwt.sign(payload, secretKey, { expiresIn: expiresIn });

      return res.status(200).json({
        data: {
          id: user.id,
          fullname: user.fullname,
          username: user.username,
          email: user.email,
        },
        token: token,
      });
    } else {
      return res.status(401).json({ message: "Password is incorrect." });
    }
  } catch (error) {
    console.error("Error during login:", error.message);
    res.status(500).json({
      message: "Server Error",
      serverMessage: error.message,
    });
  }
};

const updateUser = async (req, res) => {
  const { email } = req.params;
  const { body } = req;

  try {
    if (body.password) {
      const hashedPassword = await bcrypt.hash(body.password, 10);
      body.password = hashedPassword;
    }

    await UsersModel.updateUser(body, email);
    res.json({
      message: "UPDATE user success",
      data: req.body,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error.message,
    });
  }
};

const deleteUser = async (req, res) => {
  const { email } = req.params;

  try {
    await UsersModel.deleteUser(email);
    res.status(200).json({
      message: "DELETE user success",
      data: null,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: error.message,
    });
  }
};

module.exports = {
  getAllUsers,
  register,
  verifyEmail,
  login,
  updateUser,
  deleteUser,
};

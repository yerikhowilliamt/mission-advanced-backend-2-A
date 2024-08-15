const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const sendEmail = require('../config/mail');
const uuid = require('uuid');
const prisma = new PrismaClient();

const getAllUsers = async (req, res) => {
  try {
    const data = await prisma.user.findMany();
    res.status(200).json({
      message: "GET all users success",
      data: data,
    });
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({
      message: "Server Error",
      serverMessage: error.message,
    });
  }
};

const register = async (req, res) => {
  const { body } = req;
  const { email } = body;

  try {
    // Validasi input (tambahkan sesuai kebutuhan)
    if (!email || !body.password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    const existingUser = await prisma.user.findUnique({
      where: { email: email },
    });

    if (existingUser) {
      return res.status(400).json({ message: "Email already registered" });
    }

    const hashedPassword = await bcrypt.hash(body.password, 10);
    const token = uuid.v4();

    const newUser = await prisma.user.create({
      data: {
        email: body.email,
        fullname: body.fullname,
        password: hashedPassword,
        username: body.username,
        emailToken: token,
      },
    });

    try {
      await sendEmail(body.email, newUser.emailToken);
      console.log("Verification email sent to:", body.email);
    } catch (error) {
      console.error("Failed to send verification email:", error);
      // Meskipun email gagal dikirim, kita tetap memberikan respons sukses
    }

    res.status(201).json({
      message: "REGISTER success",
      data: `Verification email sent to ${body.email}`,
    });

  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({
      message: "Server Error",
      serverMessage: error.message,
    });
  }
};

const verifyEmail = async (req, res) => {
  const { token } = req.query;

  console.log("Verification token received:", token); // Log token

  try {
    const user = await prisma.user.findUnique({
      where: { emailToken: token },
    });

    if (!user) {
      console.log("User not found with token:", token); // Log jika tidak ditemukan
      return res.status(400).json({ message: "Invalid Verification Token" });
    }

    await prisma.user.update({
      where: { emailToken: token },
      data: { isVerified: true },
    });

    console.log("Email verified successfully for token:", token); // Log verifikasi berhasil
    return res.status(200).json({ message: "Email Verified Successfully" });
  } catch (error) {
    console.error("Error during email verification:", error);
    return res.status(500).json({
      message: "Server Error",
      serverMessage: error.message,
    });
  }
};


const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    const user = await prisma.user.findUnique({
      where: { email: email },
    });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ message: "Email or password is incorrect." });
    }

    const payload = {
      id: user.id,
      fullname: user.fullname,
      username: user.username,
      email: user.email,
    };

    const secretKey = process.env.JWT_SECRET;
    if (!secretKey) {
      throw new Error("JWT secret key is not defined");
    }

    const token = jwt.sign(payload, secretKey, { expiresIn: '1h' });

    return res.status(200).json({
      data: payload,
      token: token,
    });
  } catch (error) {
    console.error("Error during login:", error);
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
    const updateData = {
      fullname: body.fullname,
      username: body.username,
      email: body.email,
    };

    if (body.password) {
      updateData.password = await bcrypt.hash(body.password, 10);
    }

    await prisma.user.update({
      where: { email: email },
      data: updateData,
    });

    res.json({
      message: "UPDATE user success",
      data: req.body,
    });
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({
      message: "Server Error",
      serverMessage: error.message,
    });
  }
};

const deleteUser = async (req, res) => {
  const { email } = req.params;

  try {
    await prisma.user.delete({
      where: { email: email },
    });
    res.status(200).json({
      message: "DELETE user success",
      data: null,
    });
  } catch (error) {
    console.error("Error deleting user:", error);
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

const { PrismaClient } = require('@prisma/client');
const uuid = require('uuid');

const prisma = new PrismaClient();

const getAllUsers = async () => {
  try {
    return await prisma.user.findMany();
  } catch (error) {
    console.error("Error fetching all users:", error.message);
    throw new Error(error.message);
  }
};

const getUserByEmail = async (email) => {
  try {
    return await prisma.user.findUnique({
      where: { email: email },
    });
  } catch (error) {
    console.error("Error fetching user by email:", error.message);
    throw new Error(error.message);
  }
};

const register = async (body) => {
  const { email, fullname, password, username } = body;

  const token = uuid.v4();

  try {
    const newUser = await prisma.user.create({
      data: {
        email,
        fullname,
        password,
        username,
        emailToken: token,
      },
    });

    return { email, fullname, username, emailToken: token };
  } catch (error) {
    console.error("Error registering user:", error.message);
    throw new Error(error.message);
  }
};

const updateUser = async (body, id) => {
  const { fullname, password, username, email } = body;

  try {
    const updateData = { fullname, username, email };
    if (password) {
      updateData.password = password;
    }

    return await prisma.user.update({
      where: { id: id },
      data: updateData,
    });
  } catch (error) {
    console.error("Error updating user:", error.message);
    throw new Error("Failed to update user.");
  }
};

const deleteUser = async (email) => {
  try {
    return await prisma.user.delete({
      where: { email: email },
    });
  } catch (error) {
    console.error("Error deleting user:", error.message);
    throw new Error(error.message);
  }
};

module.exports = {
  getAllUsers,
  getUserByEmail,
  register,
  updateUser,
  deleteUser,
};

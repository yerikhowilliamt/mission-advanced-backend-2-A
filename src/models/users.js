const dbPool = require("../config/database");
const crypto = require('crypto');

const getAllUsers = () => {
  const SQLQuery = "SELECT * FROM user";
  return dbPool.execute(SQLQuery);
};

const getUserByEmail = async (email) => {
  const SQLQuery = "SELECT * FROM user WHERE email = ?";
  try {
    const [rows, fields] = await dbPool.execute(SQLQuery, [email]);
    return rows;
  } catch (error) {
    throw new Error(error.message);
  }
};


const register = async (body) => {
  const { email, fullname, password, username } = body;

  const token = crypto.randomBytes(64).toString('hex');

  const SQLQuery = `INSERT INTO user (email, fullname, password, username, emailToken) 
                    VALUES (?, ?, ?, ?, ?)`;
  await dbPool.execute(SQLQuery, [email, fullname, password, username, token]);

  return { email, fullname, username, emailToken: token };
};


const updateUser = async (body, id) => {
  const { fullname, password, username, email } = body;

  try {
    if (password) {
      const SQLQuery = `UPDATE user SET fullname=?, password=?, username=?, email=? WHERE id=?`;
      return dbPool.execute(SQLQuery, [
        fullname,
        password,
        username,
        email,
        id,
      ]);
    } else {
      const SQLQuery = `UPDATE user SET fullname=?, password=? username=?, email=? WHERE id=?`;
      return dbPool.execute(SQLQuery, [fullname, password, username, email, id]);
    }
  } catch (error) {
    console.error("Error updating user:", error.message);
    throw new Error("Failed to update user.");
  }
};

const deleteUser = (email) => {
  const SQLQuery = `DELETE FROM user WHERE email=?`;
  return dbPool.execute(SQLQuery, [email]);
};

module.exports = {
  getAllUsers,
  getUserByEmail,
  register,
  updateUser,
  deleteUser,
};

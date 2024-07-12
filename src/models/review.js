const dbPool = require("../config/database");

const getAllReview = () => {
  const SQLQuery = "SELECT * FROM review";
  return dbPool.execute(SQLQuery);
};

const createNewReview = (body) => {
  const { rating, deskripsi } = body;
  const SQLQuery = `INSERT INTO review (rating, deskripsi) VALUES (?, ?)`;
  return dbPool.execute(SQLQuery, [rating, deskripsi]);
};

const updateReview = (body, id) => {
  const { rating, deskripsi } = body;
  const SQLQuery = `UPDATE review SET rating = ?, deskripsi = ? WHERE id = ?`;
  return dbPool.execute(SQLQuery, [id, rating, deskripsi]);
};

const deleteReview = (id) => {
  const SQLQuery = `DELETE FROM review WHERE id=?`;
  return dbPool.execute(SQLQuery, [id]);
};

module.exports = { getAllReview, createNewReview, updateReview, deleteReview };

const dbPool = require("../config/database");

const getAllReviewPretest = () => {
  const SQLQuery = "SELECT * FROM review_pretest";
  return dbPool.execute(SQLQuery);
};

const createNewReviewPretest = (body) => {
  const { id_pretest, id_review } = body;
  const SQLQuery = `INSERT INTO review_pretest id_pretest, id_review) VALUES (?, ?)`;
  return dbPool.execute(SQLQuery, [id_pretest, id_review]);
};

const updateReviewPretest = (body, id) => {
  const { id_pretest, id_review } = body;
  const SQLQuery = `UPDATE review_pretest SET id_pretest = ?, id_review = ? WHERE id = ?`;
  return dbPool.execute(SQLQuery, [id, id_pretest, id_review]);
};

const deleteReviewPretest = (id) => {
  const SQLQuery = `DELETE FROM review_pretest WHERE id=?`;
  return dbPool.execute(SQLQuery, [id]);
};

module.exports = { getAllReviewPretest, createNewReviewPretest, updateReviewPretest, deleteReviewPretest };

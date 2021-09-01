const knex = require("../db/connection");

function readCritics(critic_id) {
  return knex("critics")
    .where({ critic_id: parseInt(critic_id) })
    .select("*")
    .first();
}

function update(updatedReview) {
  return knex("reviews")
    .where({ review_id: parseInt(updatedReview.review_id) })
    .update(updatedReview, ["content", "review_id"])
    .then((updatedRecords) => {
      return knex("reviews")
        .select("*")
        .where({ review_id: parseInt(updatedReview.review_id) })
        .first()
  });
}

function read(review_id) {
  return knex("reviews").select("*").where({ review_id }).first();
}

module.exports = {
  update,
  read,
  readCritics,
};

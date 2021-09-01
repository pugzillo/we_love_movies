const knex = require("../db/connection");

function readCritics(updatedReview) {
  return knex("critics")
    .where({ critic_id: updatedReview.critic_id })
    .select("*")
    .first();
}

function update(updatedReview) {
  return knex("reviews")
    .where({ review_id: parseInt(updatedReview.review_id) })
    .update(updatedReview, "*")
    .then((updatedRecords) => updatedRecords[0]);
}

function read(review_id) {
  return knex("reviews").select("*").where({ review_id }).first();
}

module.exports = {
  update,
  read,
  readCritics,
};

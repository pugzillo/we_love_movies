const knex = require("../db/connection");


// TODO: add join to critics
function update(updatedReview) {
  return knex("reviews")
    .select("*")
    .where({ "review_id": parseInt(updatedReview.review_id) })
    .update(updatedReview, "*")
    .then((updatedRecords) => updatedRecords);
}

function read(review_id) {
  return knex("reviews").select("*").where({ review_id }).first();
}

module.exports = {
  update,
  read,
};

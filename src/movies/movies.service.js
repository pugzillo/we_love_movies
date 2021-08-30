const knex = require("../db/connection");

function moviesInTheaters(is_showing) {
  return knex("movies as m")
    .join("movies_theaters as mt", "m.movie_id", "mt.movie_id")
    .select("DISTINCT m.*")
    .where({ "mt.is_showing": is_showing })
    .distinct();
}

function list(is_showing) {
  if (is_showing) {
    return moviesInTheaters(is_showing);
  }
  return knex("movies").select("*");
}

module.exports = {
  list,
};

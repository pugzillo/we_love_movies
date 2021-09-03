const { reduce } = require("lodash");
const knex = require("../db/connection");
const reduceProperties = require("../utils/reduce-properties");

// set up schema for list (values will be nested in movies columns)
const reduceMovies = reduceProperties("theater_id", {
    movie_id: ["movies", null, "movie_id"],
    title: ["movies", null, "title"],
    runtime_in_minutes: ["movies", null, "runtime_in_minutes"],
    rating: ["movies", null, "rating"],
    description: ["movies", null, "description"],
    image_url: ["movies", null, "image_url"],
    is_showing: ["movies", null, "is_showing"],
    theater_id: ["movies", null, "theater_id"], 
  });


function list(movie_id) {
  if (movie_id) {
    // theaters playing a specific movie if movie_id is defined
    return knex("theaters as t")
    .join("movies_theaters as mt", "t.theater_id", "mt.theater_id")
    .join("movies as m", "mt.movie_id", "m.movie_id")
    .where({ "mt.movie_id" : movie_id})
    .select("t.*");
  }
  // list all movies playing at all theaters
  return knex("theaters as t")
    .join("movies_theaters as mt", "t.theater_id", "mt.theater_id")
    .join("movies as m", "mt.movie_id", "m.movie_id")
    .select("t.*", "mt.*", "m.*")
    .then(reduceMovies); // nest fields in movies
}

module.exports = {
  list,
};

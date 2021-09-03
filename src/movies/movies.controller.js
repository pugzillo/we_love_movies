const moviesService = require("./movies.service");

async function movieExists(req, res, next) {
  const movie = await moviesService.read(req.params.movieId);
  if (movie) {
    res.locals.movie = movie; // set found movie as local variable
    next();
  }
  next({ status: 404, message: `Movie cannot be found.` });
}

async function list(req, res, next) {
  const data = await moviesService.list(req.query.is_showing);
  res.json({ data });
}

async function read(req, res, next) {
  const { movie: data } = res.locals;
  res.json({ data });
}

module.exports = {
  list,
  read: [movieExists, read],
};

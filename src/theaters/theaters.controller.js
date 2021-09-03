const theatersService = require("./theaters.service");

async function list(req, res, next) {
  const { movieId } = req.params;
  if (movieId) {
    // theaters playing specific movies
    const data = await theatersService.list(movieId);
    res.json({ data });
  } else {
    const data = await theatersService.list();
    res.json({ data });
  }
}

module.exports = {
  list,
};

const reviewsService = require("./reviews.service");

async function reviewExists(req, res, next) {
  const review = await reviewsService.read(req.params.reviewId);
  if (review) {
    res.locals.review = review;
    return next();
  }
  next({ status: 404, message: `Review cannot be found` });
}

async function update(req, res) {
  const updatedReview = {
    ...req.body.data,
    review_id: res.locals.review.review_id,
  };
  const data = await reviewsService.update(updatedReview);
  data.critic = await reviewsService.readCritics(data.critic_id);
  res.json({ data });
}

async function destroy(req, res) {
  const { review } = res.locals;
  await reviewsService.delete(review.review_id);
  res.sendStatus(204);
}

async function list(req, res) {
  const { movieId } = req.params;
  const { critics, reviews } = await reviewsService.list(movieId);
  reviews.forEach((review) => review.critic = critics.find(c => c.critic_id === review.critic_id));
  res.json({ data: reviews });
}

module.exports = {
  update: [reviewExists, update],
  delete: [reviewExists, destroy],
  list,
};

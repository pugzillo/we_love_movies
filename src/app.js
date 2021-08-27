if (process.env.USER) require("dotenv").config();
const express = require("express");
const app = express();
const moviesRouter = require("./movies/movies.router");

app.use(express.json());

// Routers
app.use("/movies", moviesRouter);

module.exports = app;

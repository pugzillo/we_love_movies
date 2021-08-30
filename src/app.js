if (process.env.USER) require("dotenv").config();
const express = require("express");
const app = express();
const moviesRouter = require("./movies/movies.router");
const theatersRouter = require("./theaters/theaters.router");

app.use(express.json());

// Routers
app.use("/movies", moviesRouter);
app.use("/theaters", theatersRouter); 

// Not found handler
app.use((req, res, next) => {
    next({ status: 404, message: `Not found: ${req.originalUrl}`});
});

// Error Handler
app.use((error, req, res, next) => {
    console.log(error);
    const { status = 500, message = "Something went wrong!"} = error; 
    res.status(status).json({ error: message }); 
});

module.exports = app;

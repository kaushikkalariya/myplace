const express = require("express");
const app = express();
const adminRouter = require("./routers/adminRouter");
const postRouter = require("./routers/postRouter");
const favoritesRoute = require("./routers/favoritesRoute");

const createError = require("http-errors");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Router

app.get("/api/v1", (req, res, next) => {
  console.log("aaa");
});

app.use("/api/v1/users", adminRouter);
app.use("/api/v1/post", postRouter);
app.use("/api/v1/favorites", favoritesRoute);

app.use((req, res, next) => {
  next(createError(404, "Not Found"));
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);

  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
  });
});

module.exports = app;

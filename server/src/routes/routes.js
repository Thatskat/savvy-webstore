const express = require("express");
const router = express.Router();

const authorizedRoutes = require("./authorizedRoutes");


module.exports = () => {
  router.get("/", (req, res, next) => {
    res.status(200).send("Welcome to the official Savvy WebStore API.");
  });

  router.use("/auth", authorizedRoutes());

  return router;
};

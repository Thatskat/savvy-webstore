const express = require("express");
const router = express.Router();

const authorizedRoutes = require("./authorizedRoutes");
const productRoutes = require("./productRoutes");

module.exports = () => {
  router.get("/", (req, res, next) => {
    res.status(200).send("Welcome to the official Savvy WebStore API.");
  });

  router.use("/auth", authorizedRoutes());

  router.use("/products", productRoutes());

  return router;
};

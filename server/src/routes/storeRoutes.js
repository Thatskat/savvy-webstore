const express = require("express");
const router = express.Router();

const storeController = require("../controllers/storeController");

module.exports = () => {
  router.get("/", storeController.getAllStores);
  router.get("/:storeName", storeController.getStoreByName);

  return router;
};

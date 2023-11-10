const express = require("express");
const router = express.Router();

const productPolicy = require("../policies/productPolicy");
const filePolicy = require("../policies/filePolicy");
const verifyAuth = require("../middleware/verifyAuth");
const fileServerUpload = require("../middleware/fileServerUpload");
const productController = require("../controllers/productController");

module.exports = () => {
  router.get("/", productController.getAllProducts);
  router.get("/:id", productController.getProductById);
  router.get("/find/:itemType", productController.getItemByCategory)

  router.post(
    "/",
    [
      productPolicy.validateProduct,
      filePolicy.fileExists,
      filePolicy.fileSize,
      filePolicy.fileExtension([`.png`, `.jpg`, `.jpeg`, `.webp`]),
      verifyAuth.auth,
      fileServerUpload,
    ],
    productController.postProduct
  );

  router.put(
    "/:id",
    [
      productPolicy.validateProduct,
      filePolicy.fileExists,
      filePolicy.fileSize,
      filePolicy.fileExtension([`.png`, `.jpg`, `.jpeg`, `.webp`]),
      verifyAuth.auth,
      fileServerUpload,
    ],
    productController.putProductById
  );

  router.delete(
    "/:id",
    [verifyAuth.auth, verifyAuth.admin],
    productController.deleteProductById
  );

  return router;
};

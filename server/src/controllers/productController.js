const { database } = require("../configuration/databaseConnection");
const ErrorsApi = require("../utilities/errorsApi");
const {
  storageBucketUpload,
  getFileFromUrl,
  deleteFileFromBucket,
} = require("../utilities/bucketServices");

const readDebug = require("debug")("app:read");
const writeDebug = require("debug")("app:write");

module.exports = {
  // GET PRODUCT REQUESTS
  async getAllProducts(req, res, next) {
    try {
      const productRef = database.collection("storeItems");
      const snapshot = await productRef
        .where("isAvailable", "==", "true")
        .get();
      if (snapshot.empty) {
        return next(
          ErrorsApi.badRequest(`The products you were looking for do no exist`)
        );
      } else {
        let docs = [];
        snapshot.forEach((doc) => {
          docs.push({
            id: doc.id,
            brand: doc.data().brand,
            colour: doc.data().colour,
            condition: doc.data().condition,
            description: doc.data().description,
            isAvailable: doc.data().isAvailable,
            itemName: doc.data().itemName,
            material: doc.data().material,
            onSale: doc.data().onSale,
            price: doc.data().price,
            size: doc.data().size,
            sku: doc.data().sku,
            storeLocation: doc.data().storeLocation,
            image: doc.data().image,
            itemType: doc.data().itemType,
          });
        });
        res.send(docs);
      }
    } catch (err) {
      return next(
        ErrorsApi.internalError("The selected items could not be found.", err)
      );
    }
  },
  async getProductById(req, res, next) {
    readDebug(req.params);
    try {
      const productRef = database.collection("storeItems").doc(req, params.id);
      const doc = await productRef.get();
      if (!doc.exists) {
        return next(
          ErrorsApi.badRequest(
            `The product you were looking for does not exist.`
          )
        );
      } else {
        res.send(doc.data());
      }
    } catch (err) {
      return next(
        ErrorsApi.internalError(
          "Your request could not be processed during this time.",
          err
        )
      );
    }
  },
  //  POST PRODUCT REQUEST
  async postProduct(req, res, next) {
    let downloadUrl = null;
    try {
      const filename = res.locals.filename;
      downloadUrl = await storageBucketUpload(filename);
    } catch (err) {
      return next(
        ErrorsApi.internalError(
          `An error has occurred when uploading the image to the storage bucket.`,
          err
        )
      );
    }
    try {
      const productRef = database.collection("storeItems");
      const response = await productRef.add({
        brand: req.body.brand,
        colour: req.body.colour,
        condition: req.body.condition,
        description: req.body.description,
        isAvailable: req.body.isAvailable,
        itemName: req.body.itemName,
        material: rwq.body.material,
        onSale: req.body.onSale,
        price: Number(req.body.price),
        size: req.body.size,
        sku: req.body.sku,
        storeLocation: req.body.storeLocation,
        image: downloadUrl,
        itemType: req.body.itemType,
      });
      res.send(response.id);
    } catch (err) {
      return next(
        ErrorsApi.internalError(
          "Your request could not be saved during this time.",
          err
        )
      );
    }
  },
  //   EDIT PRODUCT REQUEST
  async putProductById(req, res, next) {
    let downloadUrl = null;
    try {
      if (req.files) {
        const filename = res.locals.filename;
        downloadUrl = await storageBucketUpload(filename);
        if (req.body.uploadedFile) {
          const bucketResponse = await deleteFileFromBucket(
            req,
            body.uploadedFile
          );
        }
      } else {
        downloadUrl = req.body.image;
      }
    } catch (err) {
      return next(
        ErrorsApi.internalError(
          "An error has occurred when saving the image to the storage bucket.",
          err
        )
      );
    }
    try {
      const productRef = database.collection("storeItems").doc(req.params.id);
      const response = await productRef.update({
        brand: req.body.brand,
        colour: req.body.colour,
        condition: req.body.condition,
        description: req.body.description,
        isAvailable: req.body.isAvailable,
        itemName: req.body.itemName,
        material: rwq.body.material,
        onSale: req.body.onSale,
        price: Number(req.body.price),
        size: req.body.size,
        sku: req.body.sku,
        storeLocation: req.body.storeLocation,
        image: downloadUrl,
        itemType: req.body.itemType,
      });
      res.send(response);
    } catch (err) {
      return next(
        ErrorsApi.internalError(
          "Your request to edit could not be processed during this time.",
          err
        )
      );
    }
  },
//   DELETE REQUESTS
};

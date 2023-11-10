const { database } = require("../configuration/databaseConnection");
const ErrorsApi = require("../utilities/errorsApi");

module.exports = {
  async getAllStores(req, res, next) {
    try {
      const storesRef = database.collection("stores");
      const snapshot = await storesRef.get();
      if (snapshot.empty) {
        return next(
          ErrorsApi.badRequest(`The stores you wre looking for do not exist `)
        );
      } else {
        let docs = [];
        snapshot.forEach((doc) => {
          docs.push({
            id: doc.id,
            storeName: doc.data().storeName,
            address: doc.data().address,
            phoneNumber: doc.data().phoneNumber,
            storeDescription: doc.data().storeDescription,
          });
        });
        res.send(docs);
      }
    } catch (err) {
      return next(
        ErrorsApi.internalError("The selected stores could not be found.", err)
      );
    }
  },
  async getStoreByName(req, res, next) {
    try {
      const storeRef = database.collection("stores");
      const snapshot = await storeRef
        .where("storeName", "==", req.params.storeName)
        .get();

      if (snapshot.empty) {
        return next(
          ErrorsApi.badRequest("The store with that name does not exist.")
        );
      } else {
        let docs = [];
        snapshot.forEach((doc) => {
          docs.push({
            id: doc.id,
            storeName: doc.data().storeName,
            address: doc.data().address,
            phoneNumber: doc.data().phoneNumber,
            storeDescription: doc.data().storeDescription,
          });
        });
        res.send(docs);
      }
    } catch (err) {
      return next(
        ErrorsApi.internalError("An error has occurred finding stores.", err)
      );
    }
  },
};

var admin = require("firebase-admin");
const config = require("./config");

const databaseError = require("debug")("databaseError");
const databaseSuccess = require("debug")("databaseSuccess");

try {
  var serviceAccount = require(config.database.accountKey);
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: require(config.database.storageBucket),
  });
  const database = admin.firestore();
  const sBucket = admin.storage().bucket();

  const databaseConnect = database.listCollections().then((collections) => {
    databaseSuccess("Connection to the database has been successful.");
    module.exports = { database, sBucket, databaseConnect };
  });
} catch (error) {
  databaseError(error);
}

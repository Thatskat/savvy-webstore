var admin = require("firebase-admin");
const config = require("./config");

const databaseError = require("debug")("app:databaseError");
const databaseSuccess = require("debug")("app:databaseSuccess");

try {
  databaseSuccess("Attempting database connection")
  var serviceAccount = require(config.database.accountKey);
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: config.database.storageBucket,
  });
  const database = admin.firestore();
  const sBucket = admin.storage().bucket();

  const databaseConnect = database.listCollections().then((collections) => {
    databaseSuccess("Connection to the database has been successful.");
    for (let collection of collections){
      console.log(`Found db collection ${collection.id}`)
    }
  });
  module.exports = { database, sBucket, databaseConnect };
} catch (error) {
  databaseError(error);
}

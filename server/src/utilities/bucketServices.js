const { sBucket } = require("../configuration/databaseConnection");
const config = require("../configuration/config");
const uuid = require("uuid");
const fs = require("fs");

const debugBucket = require('debug')('app:debugBucket')

module.exports = {
  async storageBucketUpload(filename) {
    const storageToken = uuid.v4();
    const serverFilePath = `./public/uploads/${filename}`;
    const options = {
      destination: filename,
      resumable: true,
      validation: "crc32c",
      metadata: {
        metadata: {
          firebaseStorageDownloadTokens: storageToken,
        },
      },
    };
    fs.access(serverFilePath, fs.F_OK, (err) => {
      if (err) {
        return {
          message: "Error has occurred storing the file to the server.",
        };
      } else {
        console.log("File has been successfully stored to the server.");
      }
    });

    const result = await sBucket.upload(serverFilePath, options);
    const bucketName = result[0].metadata.bucket;

    debugBucket(bucketName)

    const downloadUrl = `https://firebasestorage.googleapis.com/v0/b/${bucketName}/o/${filename}?alt=media&token=${storageToken}`;

    console.log(`File successfully uploaded to bucket: ${downloadUrl}`);

    fs.unlink(serverFilePath, (err) => {
      if (err) {
        return {
          message: `An error has occurred removing the temporary file within local storage.`,
        };
      } else {
        console.log("Temporary file successfully deleted.");
      }
    });
    return downloadUrl;
  },
  getFileFormUrl(downloadUrl) {
    const baseUrl = `https://firebasestorage.googleapis.com/v0/b/${config.database.storageBucket}/o/`;
    let fileGlob = downloadUrl.replace(baseUrl, "");

    const indexOfEndPath = fileGlob.indexOf("?");
    fileGlob = fileGlob.subString(0, indexOfEndPath);
    return fileGlob;
  },
  async deleteFileFromBucket(uploadedFile) {
    const file = sBucket.file(uploadedFile);
    const fileCheck = await file.exists();
    if (fileCheck[0] === false) {
      const options = {
        ignoreNotFound: true,
      };
      const data = await file.delete(options);
      return data[0];
    } else {
      const data = await file.delete();
      console.log(
        `File has been successfully deleted from the storage bucket: ${uploadedFile}`
      );
      return data[0];
    }
  },
};

const ErrorsApi = require("../utilities/errorsApi");
const path = require("path");
const writeRequestDebug = require("debug")("app:writeRequestDebug");

const fileServerUpload = (req, res, next) => {
  if (req.files) {
    const file = req.files.image;
    writeRequestDebug(
      `Image for server has been received. File Name: ${file.name}.`
    );
    const customFileName = Date.now() + "_" + file.name;
    writeRequestDebug(`Custom file name: ${customFileName}`);
    const uploadPath = path.join(
      __dirname,
      "../../public/uploads/",
      customFileName
    );
    file
      .mv(uploadPath)
      .then(() => {
        res.locals.customFileName = customFileName;
        next();
      })
      .catch((err) => {
        if (err)
          return next(
            ErrorsApi.internalError(
              "Something has gone wrong. Your file request could not be processed at this time.",
              err
            )
          );
      });
  } else {
    next();
  }
};

module.exports = fileServerUpload;

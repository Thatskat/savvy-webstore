const ErrorsApi = require("../utilities/errorsApi");
const path = require("path");
const fileExists = (req, res, next) => {
  if (!req.files && !req.body.uploadedFile) {
    return next(ErrorsApi.badRequest(`No file has been uploaded.`));
  }
  next();
};
const fileSize = (req, res, next) => {
  const fileSizeLimit = 3 * 1024 * 1024;
  if (req.files) {
    const file = req.files.image;

    if (file.size > fileSizeLimit) {
      const message = `Uploaded file, ${file.name.toString()} is over the 3 MB size limit.`;

      return next(ErrorsApi.tooLarge(message));
    }
  }
  next();
};
const fileExtension = (allowedArray) => {
  return (req, res, next) => {
    if (req.files) {
      const file = req.files.image;
      const fileExt = path.extname(file.name);

      const allowedExt = allowedArray.includes(fileExt);
      if (!allowedExt) {
        return next(
          ErrorsApi.cannotProcess(
            `Only ${allowedArray.toString()} files are allowed.`
          )
        );
      }
    }
    next();
  };
};

const filePolicy = {
  fileExists,
  fileSize,
  fileExtension,
};

module.exports = filePolicy;

const ErrorsApi = require("../utilities/errorsApi");

const ErrorHandlerAPI = (err, req, res, next) => {
  if (err instanceof ErrorsApi) {
    res.status(err.code).json(err.message);
    return;
  } else {
    console.error(err);
    res
      .status(500)
      .json({ message: "Something has gone wrong. Please try again later." });
  }
};

module.exports = ErrorHandlerAPI;

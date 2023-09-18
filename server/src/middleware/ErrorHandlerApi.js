const ErrorsApi = require("../utilities/ErrorsApi");

const ErrorHandlerAPI = (error, req, res, next) => {
  if (error instanceof ErrorsApi) {
    res.status(error.code).json(error.message);
    return;
  } else {
    console.error(error);
    res
      .status(500)
      .json({ message: "Something has gone wrong. Please try again later." });
  }
};

module.exports = ErrorHandlerAPI;

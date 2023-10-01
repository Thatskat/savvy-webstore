const internalErr = require("debug")("internalError");

class ErrorsApi {
  constructor(code, message, err) {
    this.code = code;
    this.message = message;
    this.err = err;
  }
  static badRequest(message) {
    return new ErrorsApi(400, `Bad Request: ${message}`);
  }
  static notFound() {
    return new ErrorsApi(404, `API resource could not be found.`);
  }
  static internalError(message, err) {
    internalErr(err);
    return new ErrorsApi(
      500,
      `An internal server error has occurred: ${message}`
    );
  }
}

module.exports = ErrorsApi;

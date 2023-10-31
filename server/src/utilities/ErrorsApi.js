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
  static denyAccess(message) {
    return new ErrorsApi(401, `Access Denied: ${message}`);
  }
  static notFound() {
    return new ErrorsApi(404, `API resource could not be found.`);
  }
  static forbidden(message) {
    return new ErrorsApi(403, `Access Forbidden: ${message}`);
  }
  static tooLarge(message) {
    return new ErrorsApi(413, `File Upload has Failed: ${message}`);
  }
  static cannotProcess(message) {
    return new ErrorsApi(422, `File Upload has Failed: ${message}`);
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

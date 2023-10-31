const ErrorsApi = require("../utilities/errorsApi");
const jwt = require("jsonwebtoken");
const config = require("../configuration/config");

const JSONWebTokenDebug = require("debug")("app:JWTDebug");

const auth = (auth, res, next) => {
  let token = req.header("Authorization");
  if (!token) {
    return next(ErrorsApi.denyAccess("No token has been provided."));
  } else {
    token = token.substring(7, token.length);
    JSONWebTokenDebug(`Returned Token: ${token}`);
  }

  try {
    const decoded = jwt.verify(token, config.jsonWebToken.secret);
    req.user = decoded;
    JSONWebTokenDebug(
      `User credentials have been verified: ${req.user.username}`
    );
    next();
  } catch (err) {
    return next(ErrorsApi.denyAccess("Invalid token provided", err));
  }
};

const admin = (req, res, next) => {
  if (!req.user.isAdmin) {
    return next(ErrorsApi.forbidden("User does not have permission."));
  }
  next();
};

const verifyAuth = {
  auth,
  admin,
};

module.exports = verifyAuth;

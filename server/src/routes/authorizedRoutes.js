const express = require("express");
const router = express.Router();

const authorizationPolicies = require("../policies/authorizationPolicies");
const authorizationController = require("../controllers/authorizationController");

module.exports = () => {
  router.get("/users", authorizationController.listAllUsers);
  router.post(
    "/register",
    authorizationPolicies.validateAuthorization,
    authorizationController.registerUser
  );
  router.post(
    "/login",
    authorizationPolicies.validateAuthorization,
    authorizationController.loginUser
  );
  return router;
};

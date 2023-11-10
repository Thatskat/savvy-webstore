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
  router.post(
    "/login/username",
    authorizationPolicies.validateAuthorization,
    authorizationController.usernameLogin
  );

  router.put(
    "/edit/:id",
    authorizationPolicies.validateAuthorization,
    authorizationController.editAccount
  );
  return router;
};

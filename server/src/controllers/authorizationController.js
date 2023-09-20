const { database } = require("../configuration/databaseConnection");
const ErrorsApi = require("../utilities/errorsApi");

const {
  findUser,
  encryptedPassword,
  compareHashedPassword,
  convertUserDetailsToJson,
  jsonWebTokenSignUser,
} = require("../utilities/authorizationServices");

module.exports = {
  async listAllUsers(req, res, next) {
    const usersRef = database.collection("users");
    const snapshot = await usersRef.get();

    if (snapshot.empty) {
      return next(
        ErrorsApi.badRequest("You were looking for users that do not exist.")
      );
    } else {
      let users = [];
      snapshot.forEach((document) => {
        users.push({
          email: document.data().email,
          firstName: document.data().firstName,
          isAdmin: document.data().isAdmin,
          lastName: document.data().lastName,
          password: document.data().password,
          username: document.data().username,
        });
      });
      res.send(users);
    }
  },
  async registerUser(req, res, next) {
    try {
      const { email, firstName, lastName, password, username } = req.body;

      const userMatch = await findUser(username, email);

      if (userMatch.length === 1 || userMatch > 1) {
        return next(
          ErrorsApi.badRequest(
            "An account with this email or username already exists."
          )
        );
      }
      const usersRef = database.collection("users");
      const response = await usersRef.add({
        email: email,
        firstName: firstName,
        lastName: lastName,
        password: await encryptedPassword(password),
        username: username,
        isAdmin: false,
      });

      const userJson = await convertUserDetailsToJson(response.id);
      res.send({
        token: jsonWebTokenSignUser(userJson),
      });
    } catch (err) {
      return next(
        ErrorsApi.internalError(
          "Your profile could not be created at this time.",
          err
        )
      );
    }
  },
  async loginUser(req, res, next) {
    try {
      const { email, username, password } = req.body;

      const userMatch = await findUser(username, email);

      if (userMatch.length === 0 || userMatch.length < 1) {
        return next(
          ErrorsApi.badRequest(
            "The details entered are not correct. (HINT USERNAME/EMAIL)"
          )
        );
      }

      const passwordMatch = await compareHashedPassword(userMatch, password);

      if (!passwordMatch) {
        return next(
          ErrorsApi.badRequest(
            "The details entered are not correct. (HINT PASSWORD)"
          )
        );
      }

      const userJson = await convertUserDetailsToJson(userMatch[0].id);
      res.send({
        token: jsonWebTokenSignUser(userJson),
      });
    } catch (err) {
      return next(
        ErrorsApi.internalError(
          "Your profile could not be logged into at this time.",
          err
        )
      );
    }
  },
};

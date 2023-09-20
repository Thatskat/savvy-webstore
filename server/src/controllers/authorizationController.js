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
      res.send(users)
    }
  },
  
};

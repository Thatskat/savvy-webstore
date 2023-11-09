const { database } = require("../configuration/databaseConnection");
const config = require("../configuration/config");

const jwt = require("jsonwebtoken");
const _ = require("lodash");
const bcrypt = require("bcrypt");

module.exports = {
  async findUser(email) {
    const userRef = database.collection("users");
    const snapshot = await userRef.get();

    let users = [];
    snapshot.forEach((document) => {
      users.push({
        id: document.id,
        email: document.data().email,
        firstName: document.data().firstName,
        isAdmin: document.data().isAdmin,
        lastName: document.data().lastName,
        password: document.data().password,
        username: document.data().username,
      });
    });
    const userMatch = users.filter((user) => email === user.email);
    return userMatch;
  },
  async findUserUsername(username) {
    const userRef = database.collection("users");
    const snapshot = await userRef.get();

    let users = [];
    snapshot.forEach((document) => {
      users.push({
        id: document.id,
        email: document.data().email,
        firstName: document.data().firstName,
        isAdmin: document.data().isAdmin,
        lastName: document.data().lastName,
        password: document.data().password,
        username: document.data().username,
      });
    });
    const userMatch = users.filter((user) => username === user.username);
    return userMatch;
  },
  async encryptedPassword(password) {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    return hashedPassword;
  },
  async compareHashedPasswords(user, password) {
    const hashedPassword = user[0].password;
    const matchPasswords = await bcrypt.compare(password, hashedPassword);
    return matchPasswords;
  },
  async convertUserDetailsToJson(id) {
    const usersRef = database.collection("users");
    const user = await usersRef.doc(id).get();

    const userJson = _.omit(
      {
        id: id,
        ...user.data(),
      },
      "password"
    );
    return userJson;
  },
  jsonWebTokenSignUser(user) {
    const payload = user;
    const secret = config.jsonWebToken.secret;
    const expireTimeToken = 60 * 60 * 24;

    const token = jwt.sign(payload, secret, { expiresIn: expireTimeToken });
    return token;
  },
};

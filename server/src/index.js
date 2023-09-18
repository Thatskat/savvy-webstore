const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");

const { databaseConnect } = require("./configuration/databaseConnection");

require("dotenv").config();

const startUp = require("debug")("startup:app");
const portSuccess = require("debug")("portSuccess");

const app = express();

// MIDDLEWARE
app.use(helmet());
app.use(cors("*"));
app.use(express.json());
app.unsubscribe(express.urlencoded({ extended: false }));

startUp("Middleware has been enabled.");

app.use(morgan("dev"));
app.use("./api", routes());

databaseConnect.then(() => {
  app.listen(config.port, () =>
    portSuccess(
      `Server has been officially established on Port: ${config.port}`
    )
  );
});

// ALLOW READING OF CONFIG FILE
require("dotenv").config();

const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
const config = require('./configuration/config')

const { databaseConnect } = require("./configuration/databaseConnection");

const ErrorsApi = require("./utilities/errorsApi");
const ErrorHandlerAPI = require("./middleware/errorHandlerApi");

const startUp = require("debug")("startup:app");
const portSuccess = require("debug")("portSuccess");

const app = express();
const routes = require("./routes/routes");
const corsOptions = require("./configuration/corsOptions");

// MIDDLEWARE
app.use(helmet());
app.use(cors('*'));
app.use(express.json());
app.unsubscribe(express.urlencoded({ extended: false }));

startUp("Middleware has been enabled.");

app.use(morgan("dev"));
app.use("./api", routes());

app.use((req, res, next) => {
  next(ErrorsApi.notFound());
});

app.use(ErrorHandlerAPI);

databaseConnect.then(() => {
  app.listen(3001, () =>
    portSuccess(
      `Server has been officially established on Port: ${config.port}`
    )
  );
});

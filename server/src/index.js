// ALLOW READING OF CONFIG FILE
require("dotenv").config();
// EXTERNAL MODULES
const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const fileUpload = require("express-fileupload");
const cors = require("cors");
// LOCAL MODULES
const { databaseConnect } = require("./configuration/databaseConnection");
const config = require("./configuration/config");
const ErrorsApi = require("./utilities/errorsApi");
const ErrorHandlerAPI = require("./middleware/errorHandlerApi");
const routes = require("./routes/routes");
const corsOptions = require("./configuration/corsOptions");
// DEBUGGING
const startUp = require("debug")("app:startup");
const portSuccess = require("debug")("app:portSuccess");

const app = express();

// MIDDLEWARE
app.use(helmet());
app.use(cors(corsOptions));
startUp("CORS and Helmet has been initialized");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
startUp("Middleware has been enabled.");

app.use(fileUpload({ createParentPath: true }));

// TRACK REQUESTS VIA MORGAN
app.use(morgan("dev"));

app.use("/api", routes());

app.use((req, res, next) => {
  next(ErrorsApi.notFound());
});

app.use(ErrorHandlerAPI);

databaseConnect.then(() => {
  app.listen(config.port, () =>
    portSuccess(
      `Server has been officially established on Port: ${config.port}`
    )
  );
});

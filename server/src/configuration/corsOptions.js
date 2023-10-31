const config = require("./config");
const whitelistUrls = config.cors.whitelistUrls;

const corsOptions = {
  origin: (origin, callback) => {
    if (whitelistUrls.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("This url is not allowed by cors."));
    }
  },
};

module.exports = corsOptions;

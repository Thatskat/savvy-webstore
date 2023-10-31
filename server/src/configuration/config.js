module.exports = {
  port: process.env.PORT,
  database: {
    accountKey: process.env.GOOGLE_CREDENTIALS,
    storageBucket: process.env.STORAGE_BUCKET,
  },
  cors: {
    whitelistUrls: [process.env.CORS_DEVELOPMENT, process.env.CORS_PRODUCTION],
  },
  jsonWebToken: {
    secret: process.env.JSON_WEB_TOKEN_SECRET,
  },
};

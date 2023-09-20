module.export = {
  port: process.env.PORT,
  database: {
    accountKey: process.env.GOOGLE_CREDENTIALS,
    storageBucket: process.env.STORAGE_BUCKET
  },
  cors: {
    whitelistUrls: {
      development: process.env.CORS_DEVELOPMENT,
      production: process.env.CORS_PRODUCTION
    }
  }
};

module.export = {
  port: process.env.PORT,
  database: {
    accountKey: process.env.GOOGLE_CREDENTIALS,
    storageBucket: process.env.STORAGE_BUCKET
  },
};

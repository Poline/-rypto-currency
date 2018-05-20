const path = require('path');

const env = process.env.NODE_ENV; // 'dev' or 'test'

const development = {
  app: {
    port: parseInt(process.env.PORT) || 3000,
    uploadDir: path.join(__dirname, '../public/uploads'),
  },
  public: {
    port: parseInt(process.env.PUBLIC_PORT) || 8080,
  },
};

const production = {
  app: {
    port: parseInt(process.env.PORT) || 3000,
    uploadDir: path.join(__dirname, '../public/uploads'),
  },
  public: {
    port: parseInt(process.env.PUBLIC_PORT) || 8080,
  },
};

const config = {
  development,
  production,
};

module.exports = config[env];

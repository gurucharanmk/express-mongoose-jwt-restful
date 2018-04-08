import { config } from 'dotenv';

const env = process.env.NODE_ENV;
config();

const development = {
  server: {
    port: parseInt(process.env.DEV_SERV_PORT)
  },
  db: {
    uri: process.env.DEV_MONGODB_URI,
    options: {
      debug: true
    }
  }
};

const production = {
  server: {
    port: parseInt(process.env.PROD_SERV_PORT)
  },
  db: {
    uri: process.env.PROD_MONGODB_URI,
    options: {
      debug: false
    }
  }
};

const test = {
  server: {
    port: parseInt(process.env.TEST_SERV_PORT)
  },
  db: {
    uri: process.env.TEST_MONGODB_URI,
    options: {
      debug: false
    }
  }
};

const envConfig = {
  development,
  test,
  production
};

export default envConfig[env];

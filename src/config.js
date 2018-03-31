import { config } from 'dotenv';

const env = process.env.NODE_ENV;
config();

const development = {
  server: {
    port: parseInt(process.env.DEV_SERV_PORT)
  }
};
const production = {
  server: {
    port: parseInt(process.env.PROD_SERV_PORT)
  }
};
const test = {
  server: {
    port: parseInt(process.env.TEST_SERV_PORT)
  }
};

const envConfig = {
  development,
  test,
  production
};

export default envConfig[env];

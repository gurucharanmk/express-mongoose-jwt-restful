import app from './app';
import config from './config';

app.listen(
  config.server.port,
  () => console.log(`Listening to port ${config.server.port}`) // eslint-disable-line no-console
);

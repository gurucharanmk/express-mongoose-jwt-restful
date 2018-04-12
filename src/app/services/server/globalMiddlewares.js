import bodyParser from 'body-parser';
import morgan from 'morgan';
import logger from '../logger';

export default app => {
  app.use(morgan('combined', { stream: logger.stream }));
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  return app;
};

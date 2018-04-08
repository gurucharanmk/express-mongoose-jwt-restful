import app from './services/server';
import db from './services/db';
import { errorHandler, errorNotFound } from './services/response';
import api from './api';
import config from '../config';

db.connect(config.db.uri);
app.use('/api', api);
app.use('*', errorNotFound);
app.use(errorHandler);

export default app;

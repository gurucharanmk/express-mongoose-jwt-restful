import app from './services/server';
import db from './services/db';
import api from './api';
import config from '../config';

db.connect(config.db.uri);
app.use('/', api);

export default app;

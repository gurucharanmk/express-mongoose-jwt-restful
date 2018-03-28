import app from './services/server';
import api from './api';

app.use('/', api);

export default app;

import express from 'express';
import globalMiddlewares from './globalMiddlewares';

const app = express();
export default globalMiddlewares(app);

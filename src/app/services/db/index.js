import Promise from 'bluebird';
import mongoose from 'mongoose';
import config from '../../../config';

mongoose.Promise = Promise;
Object.keys(config.db.options).forEach(key => {
  mongoose.set(key, config.db.options[key]);
});

mongoose.connection.on('error', err => {
  console.error(`MongoDB connection error: ${err}`); // eslint-disable-line no-console
  process.exit(-1);
});

export default mongoose;

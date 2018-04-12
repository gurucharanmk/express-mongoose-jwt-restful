import winston from 'winston';
import appRootPath from 'app-root-path';

const logOptions = {
  fileLogger: {
    level: 'info',
    filename: `${appRootPath}/logs/app.log`,
    handleExceptions: true,
    json: true,
    maxSize: 10 * 1024 * 1024,
    maxFiles: 10,
    colorize: false
  },
  consoleLogger: {
    level: 'verbose',
    handleExceptions: true,
    json: false,
    colorize: true
  }
};

const logger = new winston.Logger({
  transports: [
    new winston.transports.File(logOptions.fileLogger),
    new winston.transports.Console(logOptions.consoleLogger)
  ],
  exitOnError: false
});

logger.stream = {
  write: (message, encoding) => {
    logger.info(message);
  }
};

export default logger;

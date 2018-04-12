import { SERVICE_UNAVAILABLE, NOT_FOUND, OK } from 'http-status';
import logger from '../logger';

export const errorHandler = (err, req, res, next) => {
  if (err.statusCode) {
    logger.error(
      `http_status:${err.statusCode}, error_info:${JSON.stringify(
        err.errorInformation
      )}, accessed_url:${req.originalUrl}, http_method:${
        req.method
      }, accessed_ip:${req.ip}`
    );
    res.status(err.statusCode).json(err);
    return;
  }
  logger.error(
    `http_status:${SERVICE_UNAVAILABLE}, accessed_url:${
      req.originalUrl
    }, http_method:${req.method}, accessed_ip:${req.ip}`
  );
  res.status(SERVICE_UNAVAILABLE).json({
    statusCode: SERVICE_UNAVAILABLE,
    errorInformation: { error: 'Internal Server Error' }
  });
};

export const errorNotFound = (req, res) => {
  logger.error(
    `http_status:${NOT_FOUND}, accessed_url:${req.originalUrl}, http_method:${
      req.method
    }, accessed_ip:${req.ip}`
  );
  res.status(NOT_FOUND).json({
    statusCode: NOT_FOUND,
    errorInformation: { error: 'Resource not found' }
  });
};

export const successResponse = (req, res, status = OK) => content => {
  if (content) {
    logger.info(
      `http_status:${status}, content:${JSON.stringify(
        content
      )}, accessed_url:${req.originalUrl}, http_method:${
        req.method
      }, accessed_ip:${req.ip}`
    );
    res.status(status).json(content);
  }
  return null;
};

export const filterDatabaseResult = (dbResult, filter) => {
  if (dbResult === null) return null;
  return Array.isArray(dbResult)
    ? dbResult.reduce((fResult, obj) => {
        fResult.push(
          filter.reduce(
            (result, filed) => Object.assign(result, { [filed]: obj[filed] }),
            {}
          )
        );
        return fResult;
      }, [])
    : filter.reduce(
        (result, filed) => Object.assign(result, { [filed]: dbResult[filed] }),
        {}
      );
};

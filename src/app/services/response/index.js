import { SERVICE_UNAVAILABLE, NOT_FOUND } from 'http-status';

export const errorHandler = (err, req, res, next) => {
  if (err.statusCode) {
    res.status(err.statusCode).json(err);
  }
  res.status(SERVICE_UNAVAILABLE).json({
    statusCode: SERVICE_UNAVAILABLE,
    errorInformation: { error: 'Internal Server Error' }
  });
};

export const errorNotFound = (req, res) =>
  res.status(NOT_FOUND).json({
    statusCode: NOT_FOUND,
    errorInformation: { error: 'Resource not found' }
  });

export const successResponse = (res, status = 200) => content => {
  if (content) {
    res.status(status).json(content);
  }
  return null;
};

export const filterDatabaseResult = dbResult => {
  const extractFields = ['status', 'title', 'description'];
  return Array.isArray(dbResult)
    ? dbResult.reduce((fResult, obj) => {
        fResult.push({
          title: obj.title,
          status: obj.status,
          description: obj.description
        });
        return fResult;
      }, [])
    : extractFields.reduce(
        (result, filed) => Object.assign(result, { [filed]: dbResult[filed] }),
        {}
      );
};

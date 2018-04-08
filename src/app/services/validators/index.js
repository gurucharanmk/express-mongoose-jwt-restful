import { BAD_REQUEST } from 'http-status';
import { validationResult } from 'express-validator/check';

export default rules => [
  rules,
  (req, res, next) => {
    let errors = validationResult(req);
    if (!errors.isEmpty()) {
      errors = errors.mapped();
      const errorInformation = Object.keys(errors).reduce(
        (err, key) => Object.assign(err, { [key]: errors[key].msg }),
        {}
      );
      const errorStatus = { statusCode: BAD_REQUEST, errorInformation };
      return next(errorStatus);
    }
    return next();
  }
];

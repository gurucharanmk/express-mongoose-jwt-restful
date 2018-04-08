import { body, param } from 'express-validator/check';
import { sanitizeBody, sanitizeParam } from 'express-validator/filter';

export const validateBody = [
  body('title', 'Title should be more than 6 character')
    .isLength({ min: 6 })
    .trim(),
  body('description', 'Description should be more than 6 character')
    .isLength({ min: 6 })
    .trim(),
  body('status', 'Invalid status')
    .isIn(['Not Started', 'In Progress', 'Completed'])
    .trim(),
  sanitizeBody('*')
    .trim()
    .escape()
];

export const validateParam = [
  param('id', 'Invalid id has been passed').isMongoId(),
  sanitizeParam('*')
    .trim()
    .escape()
];

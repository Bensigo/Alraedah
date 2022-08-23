import { body, validationResult } from 'express-validator';
import isPerfectCircle from '../application';

export const isPerfectCircleValidation = [
  body('list').isArray(),
  body('list.*').isNumeric(),
];

export function isPerfectCircleValidationController(req, res) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const resp = isPerfectCircle(req.body.list);
  return res.send({ isPerfectCircle: resp });
}

import { Router } from 'express';
import { isPerfectCircleValidation, isPerfectCircleValidationController } from './controllers/is-perfect-circle.controller';

const perfectCircleRoutes = Router();

perfectCircleRoutes.post('/', isPerfectCircleValidation, isPerfectCircleValidationController);

export default perfectCircleRoutes;

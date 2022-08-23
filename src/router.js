import { Router } from 'express'
import perfectCircleRoutes from './module/perfect-circle/router';

const router = Router();

router.use('/perfect-circle', perfectCircleRoutes);

export default router;

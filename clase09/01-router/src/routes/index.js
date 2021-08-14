import express from 'express';
import recurso1Router from './recurso1';
import recurso2Router from './recurso2';

const router = express.Router();

router.use('/recurso1', recurso1Router);
router.use('/recurso2', recurso2Router);

export default router;

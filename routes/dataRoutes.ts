import express from 'express';
import { getAllData, createData } from '../controllers/datacontroller';
import { protect } from '../middleware/authMiddleware';

const router = express.Router();

router.get('/', getAllData);
router.post('/', protect, createData);

export default router;
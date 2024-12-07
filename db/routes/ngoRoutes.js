import express from 'express';
import { registerNGO, loginNGO } from '../controllers/ngoController.js';

const router = express.Router();

router.post('/register', registerNGO);
router.post('/login', loginNGO);

export default router;

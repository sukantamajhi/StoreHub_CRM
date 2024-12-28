import { Router } from 'express';
import AuthController from '../controllers/AuthController';

const { login, register } = AuthController;

const router = Router();

// POST /auth/login
router.post('/login', login);

// POST /auth/register
router.post('/register', register);

export default router;

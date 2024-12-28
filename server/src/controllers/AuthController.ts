import { Application, Request, Response } from 'express';
import authService from '../services/AuthService';
import { IRequest } from '../utils/types';

export default {
	register: async (req: Request, res: Response): Promise<any> => {
		try {
			const user = await authService.register(req.body);
			return res.status(201).json(user);
		} catch (error: any) {
			console.error(error, '<<-- Error in registering user');
			return res.status(400).json({  error: error.message || error });
		}
	},
	login: async (req: Request, res: Response): Promise<any> => {
		try {
			const token = await authService.login(req.body);
			return res.status(200).json({ token });
		} catch (error: any) {
			return res.status(400).json({ error: error.message });
		}
	},
};

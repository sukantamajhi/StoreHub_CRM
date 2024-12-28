import UserModel, { IUser } from '../models/UserModel';
import bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';

const JWT_SECRET = 'your_jwt_secret';
const SALT_ROUNDS = 10;

export default {
	register: async (userData: IUser): Promise<IUser> => {
		return new Promise(async (resolve, reject) => {
			try {
				const userExists = await UserModel.findOne({
					email: userData.email,
					isActive: true,
				});

				if (userExists) {
					return reject('User already exists');
				}

				const hashedPassword = await bcrypt.hash(
					userData.password,
					SALT_ROUNDS
				);
				const user = await UserModel.create({
					...userData,
					username: userData.username || userData.email,
					password: hashedPassword,
				});
				return resolve(user);
			} catch (error: any) {
				return reject(error);
			}
		});
	},
	login: async (userData: IUser): Promise<string> => {
		try {
			const user = await UserModel.findOne({ email: userData.email });
			if (!user) {
				throw new Error('User not found');
			}

			const isPasswordMatch = await bcrypt.compare(
				userData.password,
				user.password
			);
			if (!isPasswordMatch) {
				throw new Error('Invalid credentials');
			}

			const token = jwt.sign({ email: user.email }, JWT_SECRET, {
				expiresIn: '1h',
			});
			return token;
		} catch (error: any) {
			throw new Error(error.message);
		}
	},
	logout: async (token: string): Promise<void> => {
		try {
			// You can add more logic here, like adding the token to a blacklist
			// or something similar
			console.log(token);
		} catch (error: any) {
			throw new Error(error.message);
		}
	},
};

import mongoose, { Document, Schema } from 'mongoose';

export interface IUser extends Document {
	username: string;
	name: string;
	email: string;
	role: 'ADMIN' | 'OWNER' | 'MANAGER' | 'USER';
	isActive?: boolean;
	isDeleted?: boolean;
	deletedAt?: Date | null;
	password: string;
	profilePicture?: string;
	lastLogin?: Date | null;
	phoneNumber?: string;
	address?: string;
	createdAt?: Date;
	updatedAt?: Date;
}

const UserSchema = new Schema<IUser>(
	{
		username: { type: String, required: true, trim: true, unique: true },
		name: { type: String, required: true, trim: true },
		email: {
			type: String,
			required: true,
			trim: true,
			unique: true,
			match: [/.+\@.+\..+/, 'Please fill a valid email address'],
		},
		role: {
			type: String,
			enum: ['ADMIN', 'OWNER', 'MANAGER', 'USER'],
			default: 'USER',
			required: true,
		},
		isActive: {
			type: Boolean,
			default: true,
		},
		isDeleted: {
			type: Boolean,
			default: false,
		},
		deletedAt: {
			type: Date,
			default: null,
		},
		password: { type: String, required: true, minlength: 6 },
		profilePicture: { type: String, default: '' },
		lastLogin: { type: Date, default: null },
		phoneNumber: { type: String, trim: true },
		address: { type: String, trim: true },
	},
	{
		timestamps: true,
	}
);

export default mongoose.model<IUser>('users', UserSchema);

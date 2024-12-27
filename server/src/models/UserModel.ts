import mongoose, { Schema } from 'mongoose';

const UserSchema = new Schema(
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

export default mongoose.model('users', UserSchema);

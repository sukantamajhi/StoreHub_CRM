import { Schema, model, Document } from 'mongoose';

interface ICart extends Document {
	userId: Schema.Types.ObjectId;
	items: {
		productId: string;
		quantity: number;
	}[];
	totalPrice: number;
	status: 'active' | 'completed' | 'cancelled';
	discounts?: number;
	createdAt: Date;
	updatedAt: Date;
}

const CartSchema = new Schema<ICart>(
	{
		userId: { type: Schema.Types.ObjectId, required: true, ref: 'users' },
		items: [
			{
				productId: {
					type: Schema.Types.ObjectId,
					required: true,
					ref: 'products',
				},
				quantity: { type: Number, required: true, min: 1 },
			},
		],
		totalPrice: { type: Number, required: true, default: 0 },
		status: {
			type: String,
			required: true,
			enum: ['active', 'completed', 'cancelled'],
			default: 'active',
		},
		discounts: { type: Number, default: 0 },
	},
	{
		timestamps: true,
	}
);

const CartModel = model<ICart>('carts', CartSchema);

export default CartModel;

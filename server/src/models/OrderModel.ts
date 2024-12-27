import { Schema, model, Document } from 'mongoose';

interface IOrder extends Document {
	user: Schema.Types.ObjectId;
	cart: Schema.Types.ObjectId;
	totalAmount: number;
	status: 'pending' | 'shipped' | 'delivered' | 'cancelled';
	createdAt: Date;
	updatedAt: Date;
}

const OrderSchema = new Schema<IOrder>(
	{
		user: { type: Schema.Types.ObjectId, required: true, ref: 'users' },
		cart: { type: Schema.Types.ObjectId, required: true, ref: 'carts' },
		totalAmount: { type: Number, required: true },
		status: {
			type: String,
			enum: ['pending', 'shipped', 'delivered', 'cancelled'],
			default: 'pending',
		},
	},
	{
		timestamps: true,
	}
);

const OrderModel = model<IOrder>('Order', OrderSchema);

export default OrderModel;

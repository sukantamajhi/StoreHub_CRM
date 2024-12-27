import mongoose, { Schema, model, Document } from 'mongoose';

interface IProduct extends Document {
	name: string;
	description: string;
	price: number;
	category: Schema.Types.ObjectId;
	stock: number;
	createdAt: Date;
	updatedAt: Date;
}

const productSchema = new Schema<IProduct>(
	{
		name: {
			type: String,
			required: true,
			trim: true,
		},
		description: {
			type: String,
			required: true,
			trim: true,
		},
		price: {
			type: Number,
			required: true,
			min: 0,
		},
		category: {
			type: Schema.Types.ObjectId,
			ref: 'categories',
			required: true,
			trim: true,
		},
		stock: {
			type: Number,
			required: true,
			min: 0,
		},
	},
	{
		timestamps: true,
	}
);

const Product = model<IProduct>('products', productSchema);

export default Product;

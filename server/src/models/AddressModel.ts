import { Schema, model, Document } from 'mongoose';

interface IAddress extends Document {
	houseNumber: string;
	street: string;
	city: string;
	state: string;
	postalCode: string;
	country: string;
}

const AddressSchema = new Schema<IAddress>({
	houseNumber: { type: String, required: true },
	street: { type: String, required: true },
	city: { type: String, required: true },
	state: { type: String, required: true },
	postalCode: { type: String, required: true },
	country: { type: String, required: true },
});

const AddressModel = model<IAddress>('addresses', AddressSchema);

export default AddressModel;

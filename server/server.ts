import express from 'express';
import mongoose from 'mongoose';

require('dotenv').config();

const app = express();

console.log(process.env.MONGO_URI, '<<-- process.env.MONGO_URI');

mongoose
	.connect(process.env.MONGO_URI as string)
	.then(() => {
		console.log('Database connected successfully');
	})
	.catch((err) => {
		console.error(err, '<<-- Error in connecting with database');
	});

app.get('/', (req, res) => {
	res.send('Hello world from server');
});

app.listen(5000, () => {
	console.log('Running on port 5000');
});

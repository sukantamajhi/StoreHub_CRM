import express from 'express';
import mongoose from 'mongoose';

const app = express();

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

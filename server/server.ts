import express from 'express';
import mongoose from 'mongoose';
import router from './src/routes/router';
import errorMiddleware from './src/middleware/ErrorMiddleware';

require('dotenv').config();

const app = express();
app.use(express.json());

// Connect to mongodb
mongoose
	.connect(process.env.MONGO_URI as string)
	.then(() => {
		console.log('Database connected successfully');
	})
	.catch((err) => {
		console.error(err, '<<-- Error in connecting with database');
	});

// Home route
app.get('/', (req, res) => {
	res.send('Hello world from server');
});

// Routes
app.use('/api', router);

// Start server
app.listen((process.env.PORT as string) || 5000, () => {
	console.log('Running on port 5000');
});

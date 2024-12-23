import express from 'express';

const app = express();

app.get('/', (req, res) => {
	console.log('Hello world from server!!!');
	res.send('Hello world from server!!!');
});

app.listen(5000, () => {
	console.log('Running on port 5000');
});

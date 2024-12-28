import { Request, Response, NextFunction } from 'express';

interface HttpError extends Error {
	status?: number;
}

const errorMiddleware = (
	err: HttpError,
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const status = err.status || 500;
	const message = err.message || 'Something went wrong';

	res.status(status).json({
		error: true,
		status,
		message,
	});
};

export default errorMiddleware;

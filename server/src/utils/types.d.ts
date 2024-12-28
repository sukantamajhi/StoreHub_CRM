import { Request } from "express";

interface IRequest extends Request {
    headers: {
        authorization: string;
    }
}
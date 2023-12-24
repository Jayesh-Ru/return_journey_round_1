import express, {Request, Response} from "express";

import productRouter from './products';

const apiRouter = express.Router();

apiRouter.use('/products',productRouter);


export default apiRouter;
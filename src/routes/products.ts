import express, {Request, Response} from "express";
import Product from '../types/product';

let products: Product[] = [];

const productRouter= express.Router();

productRouter.get("/", async (req: Request, res: Response) => {
	console.log('--------------------->',req);
});

productRouter.get("/:id", async (req: Request, res: Response) => {
	try {
		console.log('--------------------->',req);
	} catch (error) {
		res.status(500).send('no book prsent with this id');
	}
});

productRouter.post("/", async (req: Request, res: Response) => {
	try {
		console.log('--------------------->',req);	
	} catch (error) {
		res.status(500).send('error while creating an entry');
	}
});

productRouter.delete("/:id", async (req: Request, res: Response) => {
	try {
		console.log('--------------------->',req);
	} catch (error) {
		res.status(500).send('attempt to delete an entry that is not present');
	}
});

productRouter.put("/:id", async (req: Request, res: Response) => {
	try {
		console.log('--------------------->',req);
	} catch (error) {
		res.status(500).send('attempt to update an entry unsuccesful');
	}
});

export default productRouter;
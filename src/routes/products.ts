import express, {Request, Response} from "express";
import Product from '../types/product';
import productsControllers from "../controllers/productsControllers";

let products: Product[] = [];

const productRouter= express.Router();

productRouter.get("/", productsControllers.getProducts.bind(productsControllers));

productRouter.get("/:id", productsControllers.getProductById.bind(productsControllers));

productRouter.post("/", productsControllers.createProduct.bind(productsControllers));

productRouter.delete("/:id", productsControllers.deleteProduct.bind(productsControllers));

productRouter.put("/:id", productsControllers.updateProduct.bind(productsControllers));

module.exports =  productRouter;
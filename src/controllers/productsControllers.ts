import { Request, Response } from 'express';
import Product  from '../types/product'; 
import { createFileLogger, LogLevel } from '../services/fileLoggerService';



const productLogFilePath = 'product.log';
const productLogLevel = LogLevel.DEBUG; 
const productLogger = createFileLogger(productLogFilePath, productLogLevel);

const products: Product[] = []; 

class ProductController {

    public getProducts(req: Request, res: Response): void {
    productLogger.debug('Fetching all products.');
    res.json(products);
  }

  public getProductById(req: Request, res: Response): void {
    const productId: number = parseInt(req.params.id, 10);
    const product = products.find((p) => p.id === productId);

    if (product) {
      productLogger.debug(`Fetching product with ID ${productId}.`);
      res.json(product);
    } else {
      productLogger.warn(`Product with ID ${productId} not found.`);
      res.status(404).json({ error: 'Product not found' });
    }
  }

  public createProduct(req: Request, res: Response): void {
    try {
        const { name, price } = req.body;

        if (!name || !price) {
          productLogger.warn('Missing required fields for creating a product.');
          res.status(400).json({ error: 'Missing required fields' });
          return;
        }
    
        const newProduct: Product = {
          id: products.length + 1,
          name,
          price,
        };
    
        products.push(newProduct);
    
        productLogger.info(`Product created: ${JSON.stringify(newProduct)}`);
        res.status(201).json(newProduct);
    }
    catch(error: any){
        productLogger.error(`error occured in productsController${error}`);
        new Error(`error occured, try again with accurate inputs`);
        res.status(500).send('error in POST');
    }

  }

  public updateProduct(req: Request, res: Response): void {
    const productId = parseInt(req.params.id, 10);
    const { name, price } = req.body;
    const index = products.findIndex((p) => p.id === productId);

    if (index !== -1) {
      products[index] = { ...products[index], name, price };
      productLogger.info(`Product updated: ${JSON.stringify(products[index])}`);
      res.json(products[index]);
    } else {
      productLogger.warn(`Product with ID ${productId} not found.`);
      res.status(404).json({ error: 'Product not found' });
    }
  }

  public deleteProduct(req: Request, res: Response): void {
    const productId = parseInt(req.params.id, 10);
    const index = products.findIndex((p) => p.id === productId);

    if (index !== -1) {
      const deletedProduct = products.splice(index, 1)[0];
      productLogger.info(`Product deleted: ${JSON.stringify(deletedProduct)}`);
      res.json({ message: 'Product deleted successfully' });
    } else {
      productLogger.warn(`Product with ID ${productId} not found.`);
      res.status(404).json({ error: 'Product not found' });
    }
  }
}

export default new ProductController();
